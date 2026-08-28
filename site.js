(() => {
  const supported = ["en", "ru", "es", "fr", "de", "pt-BR", "ja"];
  const page = document.body.dataset.page || "home";
  const content = window.WABDY_TRANSLATIONS;

  if (!content) return;

  const normalizeLanguage = (value) => {
    if (!value) return null;
    const normalized = value.replace("_", "-").toLowerCase();
    if (normalized === "pt" || normalized.startsWith("pt-br")) return "pt-BR";
    return supported.find((language) => language.toLowerCase() === normalized)
      || supported.find((language) => normalized.startsWith(`${language.toLowerCase()}-`))
      || null;
  };

  const params = new URLSearchParams(window.location.search);
  const queryLanguage = normalizeLanguage(params.get("lang"));
  const legacyHashLanguage = normalizeLanguage(window.location.hash.slice(1));
  const browserLanguage = (navigator.languages || [navigator.language])
    .map(normalizeLanguage)
    .find(Boolean);
  let activeLanguage = queryLanguage || legacyHashLanguage || browserLanguage || "en";

  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const appendLinkedText = (element, text) => {
    const pattern = /(https:\/\/[^\s)]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g;
    let cursor = 0;
    for (const match of text.matchAll(pattern)) {
      element.append(document.createTextNode(text.slice(cursor, match.index)));
      const rawValue = match[0];
      const trailingPunctuation = rawValue.match(/[.,;:!?。]+$/)?.[0] || "";
      const value = trailingPunctuation
        ? rawValue.slice(0, -trailingPunctuation.length)
        : rawValue;
      const link = createElement("a", null, value);
      link.href = value.startsWith("http") ? value : `mailto:${value}`;
      if (value.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      element.append(link);
      if (trailingPunctuation) {
        element.append(document.createTextNode(trailingPunctuation));
      }
      cursor = match.index + rawValue.length;
    }
    element.append(document.createTextNode(text.slice(cursor)));
  };

  const renderBlocks = (container, blocks) => {
    for (const block of blocks) {
      if (Array.isArray(block)) {
        const list = createElement("ul");
        for (const item of block) {
          const row = createElement("li");
          appendLinkedText(row, item);
          list.append(row);
        }
        container.append(list);
      } else {
        const paragraph = createElement("p");
        appendLinkedText(paragraph, block);
        container.append(paragraph);
      }
    }
  };

  const renderDocument = (translation, kind) => {
    const documentContent = translation[kind];
    const article = createElement("article", "document");
    article.append(createElement("p", "eyebrow", translation.productName));
    article.append(createElement("h1", null, documentContent.title));

    if (kind === "privacy") {
      const meta = createElement("div", "meta");
      const rows = [
        [documentContent.effectiveLabel, documentContent.effectiveDate],
        [documentContent.operatorLabel, documentContent.operator],
        [documentContent.contactLabel, documentContent.contact],
      ];
      rows.forEach(([label, value], index) => {
        const strong = createElement("strong", null, `${label}: `);
        meta.append(strong);
        appendLinkedText(meta, value);
        if (index < rows.length - 1) meta.append(document.createElement("br"));
      });
      article.append(meta);
    }

    documentContent.sections.forEach((section) => {
      article.append(createElement(section.level === 3 ? "h3" : "h2", null, section.title));
      renderBlocks(article, section.blocks);
    });

    if (kind === "support") {
      const notice = createElement("p", "notice");
      const link = createElement("a", null, documentContent.privacyLink);
      link.href = `../privacy/?lang=${encodeURIComponent(activeLanguage)}`;
      notice.append(link);
      article.append(notice);
    }

    return article;
  };

  const renderHome = (translation) => {
    const fragment = document.createDocumentFragment();
    const hero = createElement("section", "hero");
    hero.append(createElement("p", "eyebrow", translation.productName));
    hero.append(createElement("h1", null, translation.home.title));
    hero.append(createElement("p", null, translation.home.description));
    fragment.append(hero);

    const grid = createElement("section", "card-grid");
    grid.setAttribute("aria-label", translation.home.informationLabel);
    translation.home.cards.forEach((card) => {
      const link = createElement("a", "card");
      link.href = `./${card.path}/?lang=${encodeURIComponent(activeLanguage)}`;
      link.append(createElement("h2", null, card.title));
      link.append(createElement("p", null, card.description));
      grid.append(link);
    });
    fragment.append(grid);
    return fragment;
  };

  const updateNavigation = (translation) => {
    const privacyLink = document.querySelector("[data-nav='privacy']");
    const supportLink = document.querySelector("[data-nav='support']");
    const prefix = page === "home" ? "./" : "../";
    privacyLink.textContent = translation.nav.privacy;
    privacyLink.href = `${prefix}privacy/?lang=${encodeURIComponent(activeLanguage)}`;
    supportLink.textContent = translation.nav.support;
    supportLink.href = `${prefix}support/?lang=${encodeURIComponent(activeLanguage)}`;
    document.querySelector("nav").setAttribute("aria-label", translation.nav.primaryLabel);
    document.querySelector("[data-language-label]").textContent = translation.nav.language;
  };

  const render = () => {
    const translation = content[activeLanguage];
    document.documentElement.lang = activeLanguage;
    document.title = page === "home"
      ? translation.productName
      : `${translation[page].title} — Wabdy`;
    document.querySelector("meta[name='description']")
      .setAttribute("content", translation.meta[page]);
    document.querySelector("#language-select").value = activeLanguage;
    updateNavigation(translation);

    const main = document.querySelector("main");
    main.replaceChildren(page === "home"
      ? renderHome(translation)
      : renderDocument(translation, page));
  };

  document.querySelector("#language-select").addEventListener("change", (event) => {
    activeLanguage = normalizeLanguage(event.target.value) || "en";
    const nextParams = new URLSearchParams(window.location.search);
    nextParams.set("lang", activeLanguage);
    window.history.replaceState({}, "", `${window.location.pathname}?${nextParams.toString()}`);
    render();
    document.querySelector("main").focus({ preventScroll: true });
  });

  render();
})();
