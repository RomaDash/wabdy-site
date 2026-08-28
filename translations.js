window.WABDY_TRANSLATIONS = {
  en: {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "Privacy", support: "Support", language: "Language", primaryLabel: "Primary navigation" },
    meta: {
      home: "Official privacy and support information for Wabdy — Photo Curator.",
      privacy: "Privacy Policy for Wabdy — Photo Curator.",
      support: "Support for Wabdy — Photo Curator.",
    },
    home: {
      title: "Your photo library stays yours.",
      description: "Wabdy helps organize photos directly on iPhone. No account, no ads, no developer-operated server, and no automatic upload of your photo library.",
      informationLabel: "Information",
      cards: [
        { path: "privacy", title: "Privacy Policy", description: "How Wabdy handles Photos access, local processing, sharing, and user controls." },
        { path: "support", title: "Support", description: "Contact information and answers to common questions." },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      effectiveLabel: "Effective date", effectiveDate: "August 28, 2026",
      operatorLabel: "Operator and data controller", operator: "Roman Danilin",
      contactLabel: "Privacy contact", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. Summary", blocks: [
          `Wabdy is an on-device photo-organizing application. Wabdy does not require an account and does not operate a developer-controlled server. The current Wabdy code does not automatically send photos, videos, photo-library identifiers, settings, usage events, or advertising identifiers to the developer. It does not contain advertising, developer-controlled telemetry, third-party analytics, tracking, or a remote crash-reporting SDK. Apple may separately provide the operator with aggregated App Analytics and crash or diagnostic reports from users who agreed to share them, subject to the user's Apple settings and Apple's privacy practices.`,
          `Wabdy may ask Apple's Photos framework to download an item that is stored in iCloud Photos and is not currently available on the device. That transfer is performed by Apple under the device owner's iCloud settings; it is not an upload to a Wabdy server.`,
        ] },
        { title: "2. Photo Library access", blocks: [
          `With permission, Wabdy can read the photos, videos, Live Photos, albums, and related metadata available through Apple Photos. This includes local Photos identifiers, creation dates, media type, dimensions, duration, and the favorite, hidden, burst, or screenshot state needed to display, filter, and organize the library.`,
          `At the user's direction, Wabdy can:`,
          [
            `add or remove items from a user album;`,
            `create a user album;`,
            `change an item's favorite or hidden state;`,
            `prepare a local review queue and ask Apple Photos to move confirmed items to Recently Deleted.`,
          ],
          `iOS controls photo-library permission and presents its own confirmation before system deletion. Wabdy does not copy the library to a developer-controlled service.`,
        ] },
        { title: "3. On-device analysis", blocks: [
          `Thumbnail preparation and optional similar-photo hints run on the device using Apple frameworks, including Vision. Feature representations used for similarity comparison are kept only in a bounded in-memory cache during the app session, are evicted as needed, and are neither persisted nor uploaded by Wabdy.`,
        ] },
        { title: "4. Information stored locally", blocks: [
          `Wabdy stores the minimum local state needed to provide its features:`,
          [
            `language, appearance, filters, date/range choices, deletion mode, selected album, onboarding state, counters, reminder preference, and resume position;`,
            `local Photos identifiers needed for deck progress, the “new photos” workflow, the pending Trash review queue, undo, and safe removal of album memberships that Wabdy previously created.`,
          ],
          `Wabdy also reads available device capacity while the app is active so it can show a low-storage warning. The value is not sent to the developer.`,
          `Some app preferences may be included in an Apple-managed device backup according to the user's system settings. Larger Wabdy journals are marked to be excluded from backup. Wabdy does not operate or receive those backups.`,
        ] },
        { title: "5. Notifications", blocks: [
          `Sorting reminders are optional local notifications. If enabled, iOS stores and delivers them on the device. Depending on the reminder selected by the user, a notification can contain the user's on-device sorting goal, the number remaining to that goal, or a sorting-streak count. It does not contain Photos identifiers, file names, photo or video content, or an analytics payload. Wabdy does not use a notification server, remote push notifications, or Live Activities in the current release.`,
        ] },
        { title: "6. Sharing and platform services", blocks: [
          `Wabdy uses Apple platform services such as Photos/iCloud Photos, Vision, UserNotifications, and the iOS share sheet. Apple's handling of its services is governed by Apple's terms and privacy policy.`,
          `Media leaves the Wabdy sandbox only after the user opens the system share sheet and chooses a destination. The selected application or recipient processes that material under its own privacy practices. Temporary export files are removed by Wabdy after the sharing flow when possible and are also subject to iOS temporary-file management.`,
          `Wabdy does not send personal data to developer-selected third-party partners. A destination selected by the user in the system share sheet is the user's choice, not a recipient selected by Wabdy or its operator.`,
        ] },
        { title: "6.1 Support correspondence", level: 3, blocks: [
          `If a person voluntarily contacts support, the data controller named at the top of this policy receives the information included in that message. This can include the sender's name and email address, message text, app/iOS/device details, and any attachment the sender chooses to provide. Users should not send private photos or other sensitive material unless it is necessary and they have reviewed its contents.`,
          `Support correspondence is processed to answer the request, troubleshoot or secure Wabdy, prevent abuse, and comply with applicable legal obligations. Where the GDPR applies, the legal bases are the controller's legitimate interests in providing support and maintaining the security and reliability of Wabdy, consent where it is specifically requested for optional material, and compliance with a legal obligation where applicable. The controller does not use support messages for advertising or unrelated profiling.`,
          `Support email is handled using Apple's iCloud Mail infrastructure. The sender's email provider and Apple may process routing and account data under their own terms and privacy notices, potentially outside the sender's country. The controller does not sell support data and does not disclose it to another recipient unless needed to operate the email service, investigate the request, comply with law, or protect legal rights. Correspondence is kept only while it is reasonably necessary for those purposes; this is assessed from whether the request remains active and whether a legal, security, or dispute-related need requires continued retention.`,
        ] },
        { title: "6.2 Public privacy and support pages", level: 3, blocks: [
          `Wabdy's public privacy and support pages are hosted on GitHub Pages. When a person visits those pages, GitHub may automatically process technical website data such as an IP address, browser or device information, service usage, page views, and cookies according to the GitHub General Privacy Statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Those hosting logs are not photo-library data transmitted by the Wabdy app, and the Wabdy operator does not receive a copy of the user's photo library through GitHub Pages.`,
        ] },
        { title: "7. Data sale, advertising, and tracking", blocks: [
          `Wabdy does not sell personal data, show third-party advertising, build user profiles, or track activity across applications or websites. The current App Store privacy declaration is “Data Not Collected” because Wabdy does not directly or automatically collect data from the app under Apple's current App Privacy definitions. User-initiated support correspondence and Apple-provided analytics or diagnostics are described above. This declaration must be reviewed if the product later adds a server, analytics, advertising, remote diagnostics, or another third-party SDK.`,
        ] },
        { title: "8. Retention and user controls", blocks: [
          `The user can change or withdraw Photos and notification permissions in iOS Settings. Wabdy Settings provide controls for reminders and local progress. Resetting sorting progress is a separate action.`,
          `Deleting Wabdy removes its application sandbox subject to normal iOS behavior. It does not automatically reverse changes already made in Apple Photos. Albums, favorite/hidden state, iCloud synchronization, and items in Recently Deleted are managed by Apple Photos and can remain after the app is removed.`,
          `For support correspondence, a person may contact the privacy address to request access, correction, deletion, restriction, or portability of their personal data, or to object to processing, where the applicable law provides that right. Where processing is based on consent, consent may be withdrawn without affecting processing that was lawful before withdrawal. A person may also complain to the data-protection authority competent for their place of residence or the relevant processing. Identity may need to be verified before a request is fulfilled. Wabdy does not use personal data for automated decisions that produce legal or similarly significant effects.`,
        ] },
        { title: "9. Children and family use", blocks: [
          `Wabdy code does not automatically transmit photo-library data to the operator, regardless of the age of the device user or the person depicted. If a user or guardian voluntarily contacts support, that correspondence is handled as described in Section 6. Photo access is controlled by the device owner and the Apple ID's system settings.`,
        ] },
        { title: "10. Security", blocks: [
          `Local records are kept inside the standard iOS application sandbox. No method of storage is completely risk-free, but Wabdy minimizes the data it stores and does not transmit that state to a developer-controlled service.`,
        ] },
        { title: "11. Changes to this policy", blocks: [
          `This policy may be updated when Wabdy features or legal requirements change. The effective date at the top of the published policy will be updated. Material changes will be disclosed through the application or its App Store listing when appropriate.`,
        ] },
        { title: "12. Contact", blocks: [
          `Questions or requests about privacy may be sent to inner-norms8f@icloud.com. The operator responsible for this policy is Roman Danilin.`,
        ] },
      ],
    },
    support: {
      title: "Support",
      privacyLink: "Read the Wabdy Privacy Policy",
      sections: [
        { title: "Contact", blocks: [
          `For support, feedback, or accessibility questions about Wabdy — Photo Curator, email inner-norms8f@icloud.com.`,
          `Please include the Wabdy version, iOS version, device model, and a short list of steps that reproduce the issue. Do not attach private photos unless they are necessary and you have reviewed their contents.`,
        ] },
        { title: "Common questions", blocks: [] },
        { title: "Does Wabdy upload my photo library?", level: 3, blocks: [
          `No. Wabdy does not upload the library to a developer server. Apple Photos may download iCloud-only media according to the device's iCloud settings.`,
        ] },
        { title: "Can Wabdy restore a system deletion?", level: 3, blocks: [
          `After iOS confirms deletion, recovery is managed through Recently Deleted in Apple Photos. Wabdy can undo only while an item is still in its local pending queue or when it can safely reverse an album operation it recorded.`,
        ] },
        { title: "How do I remove local Wabdy data?", level: 3, blocks: [
          `Settings provides a control for sorting progress. Removing the app clears its sandbox under normal iOS behavior, but does not automatically reverse changes already made in Apple Photos.`,
        ] },
      ],
    },
  },

  ru: {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "Конфиденциальность", support: "Поддержка", language: "Язык", primaryLabel: "Основная навигация" },
    meta: {
      home: "Официальная информация о конфиденциальности и поддержке Wabdy — Photo Curator.",
      privacy: "Политика конфиденциальности Wabdy — Photo Curator.",
      support: "Поддержка Wabdy — Photo Curator.",
    },
    home: {
      title: "Ваша медиатека остаётся вашей.",
      description: "Wabdy помогает организовать фото прямо на iPhone. Без учётной записи, рекламы, сервера разработчика и автоматической загрузки вашей медиатеки.",
      informationLabel: "Информация",
      cards: [
        { path: "privacy", title: "Политика конфиденциальности", description: "Как Wabdy работает с доступом к Фото, локальной обработкой, передачей и управлением данными." },
        { path: "support", title: "Поддержка", description: "Контактная информация и ответы на частые вопросы." },
      ],
    },
    privacy: {
      title: "Политика конфиденциальности",
      effectiveLabel: "Дата вступления в силу", effectiveDate: "28 августа 2026 года",
      operatorLabel: "Оператор и контролёр персональных данных", operator: "Roman Danilin",
      contactLabel: "Контакт по вопросам приватности", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. Кратко", blocks: [
          `Wabdy — приложение для организации медиатеки, которое работает на устройстве. Для него не нужна учётная запись, и у него нет сервера разработчика. Текущая версия не отправляет разработчику автоматически фото, видео, идентификаторы медиатеки, настройки, события использования или рекламные идентификаторы. В приложении нет рекламы, собственной телеметрии разработчика, сторонней аналитики, отслеживания и SDK для удалённой отправки отчётов о сбоях. Apple может отдельно предоставлять оператору сводную аналитику App Store и отчёты о сбоях или диагностике от пользователей, которые согласились ими делиться, в соответствии с настройками пользователя и политикой Apple.`,
          `Wabdy может попросить системный фреймворк «Фото» скачать оригинал из iCloud Photos, если его нет на устройстве. Эту передачу выполняет Apple в соответствии с настройками iCloud владельца устройства; данные не загружаются на сервер Wabdy.`,
        ] },
        { title: "2. Доступ к медиатеке", blocks: [
          `После разрешения Wabdy может читать доступные через Apple Photos фото, видео, Live Photo, альбомы и связанные метаданные. К ним относятся локальные идентификаторы Photos, даты создания, тип медиа, размеры, длительность и состояния «Избранное», «Скрыто», серия и скриншот, необходимые для показа, фильтрации и организации медиатеки.`,
          `По команде пользователя Wabdy может:`,
          [
            `добавлять объекты в пользовательский альбом и убирать их из него;`,
            `создавать пользовательский альбом;`,
            `менять состояние «Избранное» или «Скрыто»;`,
            `формировать локальную очередь проверки и просить Apple Photos переместить подтверждённые объекты в «Недавно удалённые».`,
          ],
          `iOS управляет разрешением на медиатеку и показывает собственное подтверждение перед системным удалением. Wabdy не копирует медиатеку в сервис разработчика.`,
        ] },
        { title: "3. Обработка на устройстве", blocks: [
          `Подготовка миниатюр и необязательные подсказки похожих фото работают на устройстве с помощью системных фреймворков Apple, включая Vision. Представления признаков для сравнения хранятся только в ограниченном кэше памяти в течение сессии приложения, при необходимости вытесняются, не записываются на диск и не отправляются приложением.`,
        ] },
        { title: "4. Локально хранимая информация", blocks: [
          `Wabdy хранит минимальное локальное состояние, необходимое для функций:`,
          [
            `язык, тему, фильтры, даты и диапазон, способ удаления, выбранный альбом, состояние онбординга, счётчики, частоту напоминаний и позицию продолжения;`,
            `локальные идентификаторы Photos для прогресса колоды, режима «новые фото», очереди проверки Корзины, отмены и безопасного удаления только тех связей с альбомом, которые ранее создал Wabdy.`,
          ],
          `Пока приложение активно, Wabdy также читает объём свободного места в хранилище устройства, чтобы показать предупреждение о его нехватке. Значение не отправляется разработчику.`,
          `Некоторые настройки могут попасть в системную резервную копию Apple согласно настройкам пользователя. Более крупные журналы Wabdy помечены как исключённые из backup. Wabdy не управляет этими копиями и не получает их.`,
        ] },
        { title: "5. Уведомления", blocks: [
          `Напоминания о сортировке — необязательные локальные уведомления. После включения iOS хранит и доставляет их на устройстве. В зависимости от выбранного пользователем напоминания уведомление может содержать заданную на устройстве цель сортировки, количество фото до цели или длину серии дней сортировки. Оно не содержит идентификаторы Photos, имена файлов, содержимое фото или видео и аналитический payload. Wabdy не использует сервер уведомлений, удалённые push-уведомления или Live Activities в текущем релизе.`,
        ] },
        { title: "6. Передача по выбору пользователя и системные сервисы", blocks: [
          `Wabdy использует платформенные сервисы Apple: Photos и iCloud Photos, Vision, UserNotifications и системное меню «Поделиться». Обработка данных этими сервисами Apple регулируется условиями и политикой конфиденциальности Apple.`,
          `Медиафайл покидает sandbox Wabdy только после того, как пользователь открыл системное меню «Поделиться» и выбрал получателя. Выбранное приложение или получатель обрабатывает материал по собственным правилам. Wabdy удаляет временные экспортные файлы после завершения передачи, когда это возможно; ими также управляет механизм временных файлов iOS.`,
          `Wabdy не отправляет персональные данные партнёрам, выбранным разработчиком. Приложение или получатель в системном меню «Поделиться» выбирается самим пользователем, а не Wabdy или его оператором.`,
        ] },
        { title: "6.1 Переписка с поддержкой", level: 3, blocks: [
          `Если пользователь добровольно обращается в поддержку, указанный в начале политики контролёр получает данные из сообщения. Это может быть имя и адрес отправителя, текст сообщения, сведения о версии приложения, iOS и устройстве, а также вложения, которые отправитель решил предоставить. Не следует отправлять личные фото и другие чувствительные материалы, если это не требуется и их содержимое не было проверено.`,
          `Переписка обрабатывается, чтобы ответить на запрос, устранить неполадку или защитить Wabdy, предотвращать злоупотребления и выполнять применимые юридические обязанности. Когда применяется GDPR, правовыми основаниями являются законный интерес контролёра в предоставлении поддержки и обеспечении безопасности и надёжности Wabdy, согласие — когда оно отдельно запрашивается для необязательных материалов, — и выполнение юридической обязанности в применимых случаях. Сообщения поддержки не используются для рекламы или не связанного с запросом профилирования.`,
          `Почта поддержки работает через инфраструктуру Apple iCloud Mail. Почтовый провайдер отправителя и Apple могут обрабатывать маршрутные и учётные данные по собственным условиям и политикам, в том числе за пределами страны отправителя. Контролёр не продаёт данные поддержки и не передаёт их другому получателю, кроме случаев, когда это необходимо для работы почты, разбора запроса, соблюдения закона или защиты законных прав. Переписка хранится только пока это разумно необходимо для этих целей; учитывается, остаётся ли запрос активным и требуется ли хранение из-за юридической обязанности, безопасности или спора.`,
        ] },
        { title: "6.2 Публичные страницы приватности и поддержки", level: 3, blocks: [
          `Публичные страницы приватности и поддержки Wabdy размещены на GitHub Pages. При посещении GitHub может автоматически обрабатывать технические данные сайта, включая IP-адрес, сведения о браузере или устройстве, использование сервиса, просмотры страниц и cookies, согласно общей политике конфиденциальности GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Эти логи хостинга не являются данными медиатеки, переданными приложением Wabdy; оператор Wabdy не получает через GitHub Pages копию медиатеки пользователя.`,
        ] },
        { title: "7. Продажа данных, реклама и отслеживание", blocks: [
          `Wabdy не продаёт персональные данные, не показывает стороннюю рекламу, не строит профили пользователей и не отслеживает действия между приложениями и сайтами. Текущая декларация App Store — «Data Not Collected», потому что по действующим определениям Apple Wabdy не собирает данные из приложения прямо или автоматически. Добровольные обращения в поддержку и предоставляемая Apple аналитика или диагностика описаны выше. Ответ необходимо пересмотреть при добавлении сервера, аналитики, рекламы, удалённой диагностики или стороннего SDK.`,
        ] },
        { title: "8. Срок хранения и управление", blocks: [
          `Пользователь может изменить или отозвать разрешения на Фото и уведомления в Настройках iOS. В настройках Wabdy есть элементы управления напоминаниями и локальным прогрессом. Сброс прогресса сортировки — отдельное действие.`,
          `Удаление Wabdy удаляет sandbox приложения в рамках обычной работы iOS, но не отменяет автоматически уже выполненные изменения в Apple Photos. Альбомы, состояния «Избранное» или «Скрыто», синхронизация iCloud и объекты в «Недавно удалённых» управляются Apple Photos и могут сохраниться после удаления приложения.`,
          `По данным переписки с поддержкой человек может написать на адрес по вопросам приватности и запросить доступ, исправление, удаление, ограничение или перенос своих персональных данных либо возразить против обработки, когда применимый закон предоставляет такое право. Если обработка основана на согласии, его можно отозвать без влияния на законность обработки до отзыва. Также можно обратиться в орган по защите данных, компетентный по месту жительства или соответствующей обработке. Перед выполнением запроса может потребоваться подтверждение личности. Wabdy не использует персональные данные для автоматизированных решений, создающих юридические или сходные существенные последствия.`,
        ] },
        { title: "9. Дети и семейное использование", blocks: [
          `Код Wabdy не отправляет оператору автоматически данные медиатеки независимо от возраста пользователя устройства или человека на снимке. Если пользователь или его законный представитель добровольно обращается в поддержку, переписка обрабатывается по правилам раздела 6. Доступ к медиатеке контролируют владелец устройства и системные настройки Apple ID.`,
        ] },
        { title: "10. Безопасность", blocks: [
          `Локальные записи находятся в стандартном sandbox iOS. Ни один способ хранения не исключает риск полностью, но Wabdy минимизирует объём состояния и не передаёт его сервису разработчика.`,
        ] },
        { title: "11. Изменения политики", blocks: [
          `Политика может обновляться при изменении функций Wabdy или юридических требований. Дата в начале опубликованной версии будет обновлена. О существенных изменениях при необходимости будет сообщено в приложении или на странице App Store.`,
        ] },
        { title: "12. Контакты", blocks: [
          `Вопросы и запросы о конфиденциальности можно отправить на inner-norms8f@icloud.com. Ответственный оператор — Roman Danilin.`,
        ] },
      ],
    },
    support: {
      title: "Поддержка",
      privacyLink: "Прочитать политику конфиденциальности Wabdy",
      sections: [
        { title: "Связаться с поддержкой", blocks: [
          `По вопросам поддержки, предложений и доступности по Wabdy — Photo Curator пишите на inner-norms8f@icloud.com.`,
          `Укажите версию Wabdy, версию iOS, модель устройства и короткую последовательность действий, после которой возникает проблема. Не прикладывайте личные фото, если это не требуется и вы не проверили содержимое файла.`,
        ] },
        { title: "Частые вопросы", blocks: [] },
        { title: "Wabdy загружает медиатеку на сервер?", level: 3, blocks: [
          `Нет. Wabdy не загружает медиатеку на сервер разработчика. Системное приложение Apple Photos может скачивать оригиналы из iCloud согласно настройкам устройства.`,
        ] },
        { title: "Можно ли отменить системное удаление через Wabdy?", level: 3, blocks: [
          `После подтверждения iOS восстановление выполняется через «Недавно удалённые» в Apple Photos. Wabdy может отменить действие, пока объект остаётся в локальной очереди, или безопасно обратить записанную операцию с альбомом.`,
        ] },
        { title: "Как удалить локальные данные Wabdy?", level: 3, blocks: [
          `В Настройках есть команда для прогресса сортировки. Удаление приложения очищает его sandbox в рамках обычной работы iOS, но не отменяет автоматически уже выполненные изменения в Apple Photos.`,
        ] },
      ],
    },
  },

  es: {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "Privacidad", support: "Soporte", language: "Idioma", primaryLabel: "Navegación principal" },
    meta: {
      home: "Información oficial de privacidad y soporte de Wabdy — Photo Curator.",
      privacy: "Política de privacidad de Wabdy — Photo Curator.",
      support: "Soporte de Wabdy — Photo Curator.",
    },
    home: {
      title: "Tu fototeca sigue siendo tuya.",
      description: "Wabdy te ayuda a organizar fotos directamente en el iPhone. Sin cuenta, sin anuncios, sin servidor del desarrollador y sin carga automática de tu fototeca.",
      informationLabel: "Información",
      cards: [
        { path: "privacy", title: "Política de privacidad", description: "Cómo gestiona Wabdy el acceso a Fotos, el procesamiento local, el uso compartido y tus controles." },
        { path: "support", title: "Soporte", description: "Información de contacto y respuestas a preguntas frecuentes." },
      ],
    },
    privacy: {
      title: "Política de privacidad",
      effectiveLabel: "Fecha de entrada en vigor", effectiveDate: "28 de agosto de 2026",
      operatorLabel: "Operador y responsable del tratamiento", operator: "Roman Danilin",
      contactLabel: "Contacto de privacidad", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. Resumen", blocks: [
          `Wabdy es una aplicación para organizar fotos que funciona en el dispositivo. No requiere una cuenta ni utiliza un servidor controlado por el desarrollador. El código actual de Wabdy no envía automáticamente al desarrollador fotos, vídeos, identificadores de la fototeca, ajustes, eventos de uso ni identificadores publicitarios. No contiene publicidad, telemetría controlada por el desarrollador, análisis de terceros, seguimiento ni un SDK remoto de informes de fallos. Apple puede proporcionar por separado al operador estadísticas agregadas de App Analytics e informes de fallos o diagnóstico de usuarios que hayan aceptado compartirlos, de acuerdo con los ajustes del usuario y las prácticas de privacidad de Apple.`,
          `Wabdy puede pedir al framework Fotos de Apple que descargue un elemento almacenado en Fotos en iCloud que todavía no esté disponible en el dispositivo. Apple realiza esa transferencia según los ajustes de iCloud del propietario; no es una carga a un servidor de Wabdy.`,
        ] },
        { title: "2. Acceso a la fototeca", blocks: [
          `Con permiso, Wabdy puede leer las fotos, vídeos, Live Photos, álbumes y metadatos relacionados disponibles mediante Apple Photos. Esto incluye identificadores locales de Fotos, fechas de creación, tipo de contenido, dimensiones, duración y los estados de favorito, oculto, ráfaga o captura de pantalla necesarios para mostrar, filtrar y organizar la fototeca.`,
          `Siguiendo las instrucciones del usuario, Wabdy puede:`,
          [
            `añadir o eliminar elementos de un álbum del usuario;`,
            `crear un álbum del usuario;`,
            `cambiar el estado de favorito u oculto de un elemento;`,
            `preparar una cola local de revisión y pedir a Apple Photos que mueva los elementos confirmados a Eliminado recientemente.`,
          ],
          `iOS controla el permiso de acceso a la fototeca y muestra su propia confirmación antes de la eliminación del sistema. Wabdy no copia la fototeca a un servicio controlado por el desarrollador.`,
        ] },
        { title: "3. Análisis en el dispositivo", blocks: [
          `La preparación de miniaturas y las sugerencias opcionales de fotos similares se ejecutan en el dispositivo mediante frameworks de Apple, incluido Vision. Las representaciones de características utilizadas para comparar similitudes se conservan solo en una caché limitada en memoria durante la sesión de la aplicación, se descartan cuando es necesario y Wabdy no las guarda ni las carga.`,
        ] },
        { title: "4. Información almacenada localmente", blocks: [
          `Wabdy almacena el estado local mínimo necesario para ofrecer sus funciones:`,
          [
            `idioma, apariencia, filtros, fechas y rangos, modo de eliminación, álbum seleccionado, estado de configuración inicial, contadores, preferencia de recordatorios y posición de reanudación;`,
            `identificadores locales de Fotos necesarios para el progreso de la baraja, el flujo de “fotos nuevas”, la cola pendiente de revisión de la Papelera, la función de deshacer y la eliminación segura de asociaciones con álbumes creadas previamente por Wabdy.`,
          ],
          `Mientras está activa, Wabdy también consulta el espacio disponible del dispositivo para poder mostrar un aviso de almacenamiento bajo. Este valor no se envía al desarrollador.`,
          `Algunas preferencias de la aplicación pueden incluirse en una copia de seguridad gestionada por Apple según los ajustes del usuario. Los registros más grandes de Wabdy están marcados para excluirse de la copia de seguridad. Wabdy no gestiona ni recibe esas copias.`,
        ] },
        { title: "5. Notificaciones", blocks: [
          `Los recordatorios de organización son notificaciones locales opcionales. Si se activan, iOS los almacena y entrega en el dispositivo. Según el recordatorio elegido, una notificación puede incluir el objetivo de organización configurado en el dispositivo, el número restante para alcanzarlo o una racha de días. No contiene identificadores de Fotos, nombres de archivo, contenido de fotos o vídeos ni datos de análisis. Wabdy no utiliza un servidor de notificaciones, notificaciones push remotas ni Live Activities en la versión actual.`,
        ] },
        { title: "6. Uso compartido y servicios de la plataforma", blocks: [
          `Wabdy utiliza servicios de la plataforma Apple como Fotos/Fotos en iCloud, Vision, UserNotifications y la hoja para compartir de iOS. El tratamiento de esos servicios por Apple se rige por sus términos y su política de privacidad.`,
          `El contenido multimedia sale del entorno aislado de Wabdy solo después de que el usuario abra la hoja para compartir del sistema y elija un destino. La aplicación o el destinatario seleccionado procesa ese material conforme a sus propias prácticas de privacidad. Wabdy elimina los archivos temporales de exportación después de compartirlos cuando es posible; también quedan sujetos a la gestión de archivos temporales de iOS.`,
          `Wabdy no envía datos personales a socios externos seleccionados por el desarrollador. El destino de la hoja para compartir lo elige el usuario, no Wabdy ni su operador.`,
        ] },
        { title: "6.1 Correspondencia con soporte", level: 3, blocks: [
          `Si una persona contacta voluntariamente con soporte, el responsable del tratamiento indicado al principio de esta política recibe la información incluida en el mensaje. Puede incluir el nombre y correo del remitente, el texto, datos de la aplicación, iOS y el dispositivo, y los archivos adjuntos que el remitente decida proporcionar. No se deben enviar fotos privadas ni otros materiales sensibles salvo que sea necesario y se haya revisado su contenido.`,
          `La correspondencia de soporte se trata para responder a la solicitud, solucionar problemas o proteger Wabdy, prevenir abusos y cumplir obligaciones legales aplicables. Cuando se aplica el RGPD, las bases jurídicas son los intereses legítimos del responsable en prestar soporte y mantener la seguridad y fiabilidad de Wabdy, el consentimiento cuando se solicita específicamente para material opcional y el cumplimiento de una obligación legal cuando corresponda. Los mensajes de soporte no se utilizan para publicidad ni para elaborar perfiles no relacionados.`,
          `El correo de soporte se gestiona mediante la infraestructura de iCloud Mail de Apple. El proveedor de correo del remitente y Apple pueden tratar datos de encaminamiento y cuenta según sus propios términos y avisos, posiblemente fuera del país del remitente. El responsable no vende los datos de soporte ni los comunica a otro destinatario salvo que sea necesario para operar el correo, investigar la solicitud, cumplir la ley o proteger derechos legales. La correspondencia se conserva solo durante el tiempo razonablemente necesario para esos fines, teniendo en cuenta si la solicitud sigue activa y si existe una necesidad legal, de seguridad o relacionada con una disputa.`,
        ] },
        { title: "6.2 Páginas públicas de privacidad y soporte", level: 3, blocks: [
          `Las páginas públicas de privacidad y soporte de Wabdy están alojadas en GitHub Pages. Al visitarlas, GitHub puede tratar automáticamente datos técnicos del sitio, como la dirección IP, información del navegador o dispositivo, uso del servicio, páginas vistas y cookies, conforme a la Declaración general de privacidad de GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Esos registros de alojamiento no son datos de la fototeca transmitidos por Wabdy, y el operador de Wabdy no recibe mediante GitHub Pages una copia de la fototeca del usuario.`,
        ] },
        { title: "7. Venta de datos, publicidad y seguimiento", blocks: [
          `Wabdy no vende datos personales, no muestra publicidad de terceros, no crea perfiles de usuario ni rastrea la actividad entre aplicaciones o sitios web. La declaración actual de privacidad de App Store es “Datos no recopilados” porque Wabdy no recopila directa o automáticamente datos de la aplicación según las definiciones actuales de Apple. La correspondencia iniciada por el usuario y los análisis o diagnósticos proporcionados por Apple se describen arriba. Esta declaración debe revisarse si en el futuro se añade un servidor, análisis, publicidad, diagnóstico remoto u otro SDK de terceros.`,
        ] },
        { title: "8. Conservación y controles del usuario", blocks: [
          `El usuario puede cambiar o retirar los permisos de Fotos y notificaciones en Ajustes de iOS. Los ajustes de Wabdy incluyen controles para recordatorios y progreso local. Restablecer el progreso de organización es una acción separada.`,
          `Eliminar Wabdy borra su entorno aislado conforme al funcionamiento normal de iOS, pero no revierte automáticamente los cambios ya realizados en Apple Photos. Los álbumes, estados de favorito u oculto, la sincronización de iCloud y los elementos de Eliminado recientemente son gestionados por Apple Photos y pueden permanecer después de desinstalar la aplicación.`,
          `Respecto a la correspondencia de soporte, una persona puede escribir al contacto de privacidad para solicitar acceso, rectificación, supresión, limitación o portabilidad de sus datos personales, u oponerse al tratamiento cuando la ley aplicable reconozca ese derecho. Cuando el tratamiento se base en el consentimiento, puede retirarse sin afectar a la licitud anterior. También puede presentar una reclamación ante la autoridad de protección de datos competente. Puede ser necesario verificar la identidad antes de atender la solicitud. Wabdy no utiliza datos personales para decisiones automatizadas que produzcan efectos jurídicos o de importancia similar.`,
        ] },
        { title: "9. Menores y uso familiar", blocks: [
          `El código de Wabdy no transmite automáticamente datos de la fototeca al operador, independientemente de la edad del usuario del dispositivo o de la persona que aparece en la imagen. Si un usuario o tutor contacta voluntariamente con soporte, la correspondencia se gestiona como se describe en la sección 6. El acceso a Fotos lo controlan el propietario del dispositivo y los ajustes del Apple ID.`,
        ] },
        { title: "10. Seguridad", blocks: [
          `Los registros locales se guardan en el entorno aislado estándar de iOS. Ningún método de almacenamiento está totalmente libre de riesgos, pero Wabdy minimiza los datos que conserva y no transmite ese estado a un servicio controlado por el desarrollador.`,
        ] },
        { title: "11. Cambios en esta política", blocks: [
          `Esta política puede actualizarse cuando cambien las funciones de Wabdy o los requisitos legales. Se actualizará la fecha de entrada en vigor indicada al principio. Los cambios importantes se comunicarán mediante la aplicación o su ficha de App Store cuando corresponda.`,
        ] },
        { title: "12. Contacto", blocks: [
          `Las preguntas o solicitudes sobre privacidad pueden enviarse a inner-norms8f@icloud.com. El operador responsable de esta política es Roman Danilin.`,
        ] },
      ],
    },
    support: {
      title: "Soporte",
      privacyLink: "Leer la Política de privacidad de Wabdy",
      sections: [
        { title: "Contacto", blocks: [
          `Para soporte, comentarios o preguntas de accesibilidad sobre Wabdy — Photo Curator, escribe a inner-norms8f@icloud.com.`,
          `Incluye la versión de Wabdy, la versión de iOS, el modelo del dispositivo y una breve lista de pasos para reproducir el problema. No adjuntes fotos privadas salvo que sea necesario y hayas revisado su contenido.`,
        ] },
        { title: "Preguntas frecuentes", blocks: [] },
        { title: "¿Wabdy carga mi fototeca?", level: 3, blocks: [
          `No. Wabdy no carga la fototeca en un servidor del desarrollador. Apple Photos puede descargar contenido que solo esté en iCloud según los ajustes de iCloud del dispositivo.`,
        ] },
        { title: "¿Puede Wabdy restaurar una eliminación del sistema?", level: 3, blocks: [
          `Después de que iOS confirme la eliminación, la recuperación se gestiona desde Eliminado recientemente en Apple Photos. Wabdy solo puede deshacer mientras el elemento siga en su cola local pendiente o cuando pueda revertir de forma segura una operación de álbum que haya registrado.`,
        ] },
        { title: "¿Cómo elimino los datos locales de Wabdy?", level: 3, blocks: [
          `Ajustes incluye un control para el progreso de organización. Eliminar la aplicación borra su entorno aislado conforme al funcionamiento normal de iOS, pero no revierte automáticamente los cambios ya realizados en Apple Photos.`,
        ] },
      ],
    },
  },

  fr: {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "Confidentialité", support: "Assistance", language: "Langue", primaryLabel: "Navigation principale" },
    meta: {
      home: "Informations officielles sur la confidentialité et l’assistance de Wabdy — Photo Curator.",
      privacy: "Politique de confidentialité de Wabdy — Photo Curator.",
      support: "Assistance pour Wabdy — Photo Curator.",
    },
    home: {
      title: "Votre photothèque reste la vôtre.",
      description: "Wabdy vous aide à organiser vos photos directement sur l’iPhone. Aucun compte, aucune publicité, aucun serveur exploité par le développeur et aucun envoi automatique de votre photothèque.",
      informationLabel: "Informations",
      cards: [
        { path: "privacy", title: "Politique de confidentialité", description: "Comment Wabdy gère l’accès à Photos, le traitement local, le partage et vos contrôles." },
        { path: "support", title: "Assistance", description: "Coordonnées et réponses aux questions fréquentes." },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      effectiveLabel: "Date d’entrée en vigueur", effectiveDate: "28 août 2026",
      operatorLabel: "Exploitant et responsable du traitement", operator: "Roman Danilin",
      contactLabel: "Contact confidentialité", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. Résumé", blocks: [
          `Wabdy est une application d’organisation de photos qui fonctionne sur l’appareil. Wabdy ne nécessite pas de compte et n’exploite aucun serveur contrôlé par le développeur. Le code actuel de Wabdy n’envoie pas automatiquement au développeur les photos, vidéos, identifiants de photothèque, réglages, événements d’utilisation ou identifiants publicitaires. Il ne contient ni publicité, ni télémétrie contrôlée par le développeur, ni analyse tierce, ni suivi, ni SDK distant de rapport d’incident. Apple peut fournir séparément à l’exploitant des données App Analytics agrégées et des rapports d’incident ou de diagnostic provenant d’utilisateurs ayant accepté de les partager, selon les réglages de l’utilisateur et les pratiques de confidentialité d’Apple.`,
          `Wabdy peut demander au framework Photos d’Apple de télécharger un élément stocké dans Photos iCloud qui n’est pas encore disponible sur l’appareil. Ce transfert est effectué par Apple selon les réglages iCloud du propriétaire de l’appareil ; il ne s’agit pas d’un envoi vers un serveur Wabdy.`,
        ] },
        { title: "2. Accès à la photothèque", blocks: [
          `Avec autorisation, Wabdy peut lire les photos, vidéos, Live Photos, albums et métadonnées associées disponibles via Apple Photos. Cela comprend les identifiants Photos locaux, dates de création, types de média, dimensions, durées et états favori, masqué, rafale ou capture d’écran nécessaires à l’affichage, au filtrage et à l’organisation de la photothèque.`,
          `À la demande de l’utilisateur, Wabdy peut :`,
          [
            `ajouter des éléments à un album utilisateur ou les en retirer ;`,
            `créer un album utilisateur ;`,
            `modifier l’état favori ou masqué d’un élément ;`,
            `préparer une file d’examen locale et demander à Apple Photos de déplacer les éléments confirmés vers Supprimés récemment.`,
          ],
          `iOS contrôle l’autorisation d’accès à la photothèque et affiche sa propre confirmation avant une suppression système. Wabdy ne copie pas la photothèque vers un service contrôlé par le développeur.`,
        ] },
        { title: "3. Analyse sur l’appareil", blocks: [
          `La préparation des vignettes et les suggestions facultatives de photos similaires s’exécutent sur l’appareil au moyen des frameworks Apple, notamment Vision. Les représentations de caractéristiques utilisées pour comparer la similarité sont conservées uniquement dans un cache mémoire limité pendant la session, sont évincées si nécessaire et ne sont ni enregistrées ni envoyées par Wabdy.`,
        ] },
        { title: "4. Informations stockées localement", blocks: [
          `Wabdy stocke l’état local minimal nécessaire à ses fonctionnalités :`,
          [
            `langue, apparence, filtres, choix de date et de plage, mode de suppression, album sélectionné, état de l’accueil initial, compteurs, préférence de rappel et position de reprise ;`,
            `identifiants Photos locaux nécessaires à la progression de la pile, au parcours « nouvelles photos », à la file d’examen de la Corbeille, à l’annulation et au retrait sécurisé des associations à des albums précédemment créées par Wabdy.`,
          ],
          `Wabdy lit aussi l’espace disponible sur l’appareil pendant son utilisation afin d’afficher un avertissement de stockage faible. Cette valeur n’est pas envoyée au développeur.`,
          `Certaines préférences peuvent être incluses dans une sauvegarde gérée par Apple selon les réglages de l’utilisateur. Les journaux Wabdy plus volumineux sont marqués pour être exclus de la sauvegarde. Wabdy n’exploite ni ne reçoit ces sauvegardes.`,
        ] },
        { title: "5. Notifications", blocks: [
          `Les rappels de tri sont des notifications locales facultatives. Lorsqu’ils sont activés, iOS les stocke et les remet sur l’appareil. Selon le rappel choisi, une notification peut contenir l’objectif de tri défini sur l’appareil, le nombre restant avant cet objectif ou une série de jours de tri. Elle ne contient aucun identifiant Photos, nom de fichier, contenu photo ou vidéo ni charge utile d’analyse. Wabdy n’utilise ni serveur de notifications, ni notifications push distantes, ni Live Activities dans la version actuelle.`,
        ] },
        { title: "6. Partage et services de la plateforme", blocks: [
          `Wabdy utilise des services de la plateforme Apple tels que Photos/Photos iCloud, Vision, UserNotifications et la feuille de partage iOS. Le traitement de ces services par Apple est régi par ses conditions et sa politique de confidentialité.`,
          `Un média ne quitte le bac à sable Wabdy qu’après l’ouverture par l’utilisateur de la feuille de partage système et le choix d’une destination. L’application ou le destinataire choisi traite ce contenu selon ses propres pratiques de confidentialité. Wabdy supprime les fichiers d’exportation temporaires après le partage lorsque cela est possible ; ils restent aussi soumis à la gestion des fichiers temporaires d’iOS.`,
          `Wabdy n’envoie pas de données personnelles à des partenaires tiers choisis par le développeur. La destination de la feuille de partage est choisie par l’utilisateur, et non par Wabdy ou son exploitant.`,
        ] },
        { title: "6.1 Correspondance avec l’assistance", level: 3, blocks: [
          `Lorsqu’une personne contacte volontairement l’assistance, le responsable du traitement indiqué en tête de cette politique reçoit les informations incluses dans le message. Cela peut comprendre le nom et l’adresse e-mail de l’expéditeur, le texte du message, des informations sur l’application, iOS et l’appareil, ainsi que toute pièce jointe choisie par l’expéditeur. Les utilisateurs ne doivent pas envoyer de photos privées ou d’autres contenus sensibles sauf si cela est nécessaire et après en avoir vérifié le contenu.`,
          `La correspondance est traitée pour répondre à la demande, dépanner ou sécuriser Wabdy, prévenir les abus et respecter les obligations légales applicables. Lorsque le RGPD s’applique, les bases juridiques sont les intérêts légitimes du responsable à fournir l’assistance et à maintenir la sécurité et la fiabilité de Wabdy, le consentement lorsqu’il est expressément demandé pour des éléments facultatifs, et le respect d’une obligation légale le cas échéant. Les messages d’assistance ne sont pas utilisés à des fins publicitaires ni pour un profilage sans rapport.`,
          `L’e-mail d’assistance est géré au moyen de l’infrastructure iCloud Mail d’Apple. Le fournisseur de messagerie de l’expéditeur et Apple peuvent traiter les données d’acheminement et de compte selon leurs propres conditions et avis, éventuellement hors du pays de l’expéditeur. Le responsable ne vend pas les données d’assistance et ne les communique pas à un autre destinataire, sauf si cela est nécessaire au fonctionnement de la messagerie, à l’examen de la demande, au respect de la loi ou à la protection de droits légaux. La correspondance n’est conservée que pendant la durée raisonnablement nécessaire à ces fins, selon que la demande reste active et qu’un besoin juridique, de sécurité ou lié à un litige exige sa conservation.`,
        ] },
        { title: "6.2 Pages publiques de confidentialité et d’assistance", level: 3, blocks: [
          `Les pages publiques de confidentialité et d’assistance de Wabdy sont hébergées sur GitHub Pages. Lors de leur consultation, GitHub peut traiter automatiquement des données techniques du site telles que l’adresse IP, des informations sur le navigateur ou l’appareil, l’utilisation du service, les pages vues et les cookies, conformément à la Déclaration générale de confidentialité de GitHub : https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Ces journaux d’hébergement ne sont pas des données de photothèque transmises par l’application Wabdy, et l’exploitant de Wabdy ne reçoit pas de copie de la photothèque de l’utilisateur par GitHub Pages.`,
        ] },
        { title: "7. Vente de données, publicité et suivi", blocks: [
          `Wabdy ne vend pas de données personnelles, n’affiche pas de publicité tierce, ne crée pas de profils utilisateurs et ne suit pas l’activité entre applications ou sites web. La déclaration App Store actuelle est « Données non collectées », car Wabdy ne collecte pas directement ou automatiquement de données depuis l’application selon les définitions actuelles d’Apple. La correspondance initiée par l’utilisateur et les données d’analyse ou de diagnostic fournies par Apple sont décrites ci-dessus. Cette déclaration devra être réévaluée si le produit ajoute ultérieurement un serveur, des outils d’analyse, de la publicité, un diagnostic distant ou un autre SDK tiers.`,
        ] },
        { title: "8. Conservation et contrôles de l’utilisateur", blocks: [
          `L’utilisateur peut modifier ou retirer les autorisations Photos et Notifications dans Réglages iOS. Les réglages Wabdy proposent des contrôles pour les rappels et la progression locale. La réinitialisation de la progression du tri est une action distincte.`,
          `La suppression de Wabdy efface son bac à sable selon le fonctionnement normal d’iOS, mais n’annule pas automatiquement les modifications déjà effectuées dans Apple Photos. Les albums, états favori ou masqué, la synchronisation iCloud et les éléments de Supprimés récemment sont gérés par Apple Photos et peuvent subsister après la suppression de l’application.`,
          `Pour la correspondance avec l’assistance, une personne peut contacter l’adresse de confidentialité afin de demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de ses données personnelles, ou de s’opposer au traitement lorsque la loi applicable prévoit ce droit. Lorsque le traitement repose sur le consentement, celui-ci peut être retiré sans affecter la licéité du traitement antérieur. Une réclamation peut aussi être déposée auprès de l’autorité de protection des données compétente. Une vérification d’identité peut être nécessaire avant de traiter la demande. Wabdy n’utilise pas de données personnelles pour des décisions automatisées produisant des effets juridiques ou comparables.`,
        ] },
        { title: "9. Enfants et usage familial", blocks: [
          `Le code de Wabdy ne transmet pas automatiquement de données de photothèque à l’exploitant, quel que soit l’âge de l’utilisateur de l’appareil ou de la personne représentée. Si un utilisateur ou un représentant légal contacte volontairement l’assistance, la correspondance est traitée comme indiqué à la section 6. L’accès à Photos est contrôlé par le propriétaire de l’appareil et les réglages de l’identifiant Apple.`,
        ] },
        { title: "10. Sécurité", blocks: [
          `Les enregistrements locaux sont conservés dans le bac à sable standard d’iOS. Aucun mode de stockage n’est totalement exempt de risque, mais Wabdy limite les données conservées et ne transmet pas cet état à un service contrôlé par le développeur.`,
        ] },
        { title: "11. Modifications de cette politique", blocks: [
          `Cette politique peut être mise à jour si les fonctionnalités de Wabdy ou les exigences légales évoluent. La date d’entrée en vigueur en tête de la version publiée sera mise à jour. Les changements importants seront signalés dans l’application ou sur sa fiche App Store lorsque cela est approprié.`,
        ] },
        { title: "12. Contact", blocks: [
          `Les questions ou demandes relatives à la confidentialité peuvent être envoyées à inner-norms8f@icloud.com. L’exploitant responsable de cette politique est Roman Danilin.`,
        ] },
      ],
    },
    support: {
      title: "Assistance",
      privacyLink: "Lire la politique de confidentialité de Wabdy",
      sections: [
        { title: "Contact", blocks: [
          `Pour toute question d’assistance, remarque ou question d’accessibilité concernant Wabdy — Photo Curator, écrivez à inner-norms8f@icloud.com.`,
          `Indiquez la version de Wabdy, la version d’iOS, le modèle de l’appareil et une courte liste d’étapes permettant de reproduire le problème. Ne joignez pas de photos privées sauf si cela est nécessaire et après en avoir vérifié le contenu.`,
        ] },
        { title: "Questions fréquentes", blocks: [] },
        { title: "Wabdy envoie-t-il ma photothèque ?", level: 3, blocks: [
          `Non. Wabdy n’envoie pas la photothèque vers un serveur du développeur. Apple Photos peut télécharger les médias uniquement présents dans iCloud selon les réglages iCloud de l’appareil.`,
        ] },
        { title: "Wabdy peut-il restaurer une suppression système ?", level: 3, blocks: [
          `Après confirmation de la suppression par iOS, la récupération s’effectue depuis Supprimés récemment dans Apple Photos. Wabdy ne peut annuler que tant que l’élément reste dans sa file locale en attente ou lorsqu’il peut inverser en toute sécurité une opération d’album qu’il a enregistrée.`,
        ] },
        { title: "Comment supprimer les données locales de Wabdy ?", level: 3, blocks: [
          `Les réglages proposent une commande pour la progression du tri. La suppression de l’application efface son bac à sable selon le fonctionnement normal d’iOS, mais n’annule pas automatiquement les modifications déjà effectuées dans Apple Photos.`,
        ] },
      ],
    },
  },

  de: {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "Datenschutz", support: "Support", language: "Sprache", primaryLabel: "Hauptnavigation" },
    meta: {
      home: "Offizielle Datenschutz- und Supportinformationen für Wabdy — Photo Curator.",
      privacy: "Datenschutzerklärung für Wabdy — Photo Curator.",
      support: "Support für Wabdy — Photo Curator.",
    },
    home: {
      title: "Deine Fotomediathek bleibt deine.",
      description: "Wabdy hilft dir, Fotos direkt auf dem iPhone zu organisieren. Kein Konto, keine Werbung, kein vom Entwickler betriebener Server und kein automatisches Hochladen deiner Fotomediathek.",
      informationLabel: "Informationen",
      cards: [
        { path: "privacy", title: "Datenschutzerklärung", description: "Wie Wabdy den Zugriff auf Fotos, die lokale Verarbeitung, das Teilen und deine Kontrollmöglichkeiten handhabt." },
        { path: "support", title: "Support", description: "Kontaktinformationen und Antworten auf häufige Fragen." },
      ],
    },
    privacy: {
      title: "Datenschutzerklärung",
      effectiveLabel: "Gültig ab", effectiveDate: "28. August 2026",
      operatorLabel: "Betreiber und Verantwortlicher", operator: "Roman Danilin",
      contactLabel: "Datenschutzkontakt", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. Zusammenfassung", blocks: [
          `Wabdy ist eine App zur Fotoorganisation, die auf dem Gerät arbeitet. Wabdy erfordert kein Konto und betreibt keinen vom Entwickler kontrollierten Server. Der aktuelle Wabdy-Code sendet Fotos, Videos, Kennungen der Fotomediathek, Einstellungen, Nutzungsereignisse oder Werbekennungen nicht automatisch an den Entwickler. Die App enthält keine Werbung, keine vom Entwickler kontrollierte Telemetrie, keine Analysedienste Dritter, kein Tracking und kein SDK für entfernte Absturzberichte. Apple kann dem Betreiber unabhängig davon aggregierte App-Analytics sowie Absturz- oder Diagnoseberichte von Nutzern bereitstellen, die der Freigabe zugestimmt haben, abhängig von den Apple-Einstellungen und Datenschutzpraktiken des Nutzers.`,
          `Wabdy kann Apples Fotos-Framework bitten, ein in iCloud-Fotos gespeichertes Element herunterzuladen, das noch nicht auf dem Gerät verfügbar ist. Diese Übertragung erfolgt durch Apple gemäß den iCloud-Einstellungen des Geräteinhabers; sie ist kein Upload auf einen Wabdy-Server.`,
        ] },
        { title: "2. Zugriff auf die Fotomediathek", blocks: [
          `Mit Erlaubnis kann Wabdy Fotos, Videos, Live Photos, Alben und zugehörige Metadaten lesen, die über Apple Fotos verfügbar sind. Dazu gehören lokale Fotos-Kennungen, Erstellungsdaten, Medientyp, Abmessungen, Dauer sowie Favoriten-, Ausgeblendet-, Serienbild- oder Bildschirmfoto-Status, die zum Anzeigen, Filtern und Organisieren erforderlich sind.`,
          `Auf Anweisung des Nutzers kann Wabdy:`,
          [
            `Elemente zu einem Benutzeralbum hinzufügen oder daraus entfernen;`,
            `ein Benutzeralbum erstellen;`,
            `den Favoriten- oder Ausgeblendet-Status eines Elements ändern;`,
            `eine lokale Prüfliste vorbereiten und Apple Fotos bitten, bestätigte Elemente in „Zuletzt gelöscht“ zu verschieben.`,
          ],
          `iOS verwaltet die Berechtigung für die Fotomediathek und zeigt vor einer Systemlöschung eine eigene Bestätigung. Wabdy kopiert die Mediathek nicht in einen vom Entwickler kontrollierten Dienst.`,
        ] },
        { title: "3. Analyse auf dem Gerät", blocks: [
          `Die Vorbereitung von Miniaturbildern und optionale Hinweise auf ähnliche Fotos laufen mithilfe von Apple-Frameworks einschließlich Vision auf dem Gerät. Merkmalsdarstellungen für den Ähnlichkeitsvergleich werden nur während der App-Sitzung in einem begrenzten Arbeitsspeicher-Cache gehalten, bei Bedarf verworfen und von Wabdy weder dauerhaft gespeichert noch hochgeladen.`,
        ] },
        { title: "4. Lokal gespeicherte Informationen", blocks: [
          `Wabdy speichert nur den lokalen Zustand, der für seine Funktionen erforderlich ist:`,
          [
            `Sprache, Darstellung, Filter, Datums- und Bereichsauswahl, Löschmodus, ausgewähltes Album, Einführungsstatus, Zähler, Erinnerungseinstellung und Fortsetzungsposition;`,
            `lokale Fotos-Kennungen für den Stapelfortschritt, den Ablauf „neue Fotos“, die ausstehende Papierkorb-Prüfliste, Rückgängig-Funktionen und das sichere Entfernen zuvor von Wabdy erstellter Albumzuordnungen.`,
          ],
          `Während die App aktiv ist, liest Wabdy außerdem den verfügbaren Gerätespeicher, um bei wenig Speicherplatz zu warnen. Der Wert wird nicht an den Entwickler gesendet.`,
          `Einige App-Einstellungen können gemäß den Systemeinstellungen des Nutzers in einer von Apple verwalteten Gerätesicherung enthalten sein. Größere Wabdy-Journale sind von Sicherungen ausgeschlossen. Wabdy betreibt oder empfängt diese Sicherungen nicht.`,
        ] },
        { title: "5. Mitteilungen", blocks: [
          `Sortiererinnerungen sind optionale lokale Mitteilungen. Wenn sie aktiviert sind, speichert und übermittelt iOS sie auf dem Gerät. Je nach gewählter Erinnerung kann eine Mitteilung das auf dem Gerät festgelegte Sortierziel, die bis zum Ziel verbleibende Anzahl oder eine Serie von Sortiertagen enthalten. Sie enthält keine Fotos-Kennungen, Dateinamen, Foto- oder Videoinhalte und keine Analyse-Nutzlast. Wabdy verwendet in der aktuellen Version keinen Mitteilungsserver, keine entfernten Push-Mitteilungen und keine Live Activities.`,
        ] },
        { title: "6. Teilen und Plattformdienste", blocks: [
          `Wabdy verwendet Apple-Plattformdienste wie Fotos/iCloud-Fotos, Vision, UserNotifications und das iOS-Teilen-Menü. Apples Verarbeitung dieser Dienste richtet sich nach Apples Bedingungen und Datenschutzerklärung.`,
          `Medien verlassen die Wabdy-Sandbox erst, nachdem der Nutzer das systemeigene Teilen-Menü geöffnet und ein Ziel ausgewählt hat. Die ausgewählte App oder der Empfänger verarbeitet das Material nach eigenen Datenschutzpraktiken. Wabdy entfernt temporäre Exportdateien nach dem Teilen, soweit möglich; außerdem unterliegen sie der Verwaltung temporärer Dateien durch iOS.`,
          `Wabdy sendet keine personenbezogenen Daten an vom Entwickler ausgewählte Drittpartner. Das Ziel im Teilen-Menü wird vom Nutzer gewählt, nicht von Wabdy oder dessen Betreiber.`,
        ] },
        { title: "6.1 Supportkorrespondenz", level: 3, blocks: [
          `Wenn eine Person freiwillig den Support kontaktiert, erhält der am Anfang dieser Erklärung genannte Verantwortliche die in der Nachricht enthaltenen Informationen. Dazu können Name und E-Mail-Adresse des Absenders, Nachrichtentext, Angaben zu App, iOS und Gerät sowie vom Absender ausgewählte Anhänge gehören. Private Fotos oder andere sensible Inhalte sollten nur gesendet werden, wenn dies erforderlich ist und ihr Inhalt zuvor geprüft wurde.`,
          `Die Supportkorrespondenz wird verarbeitet, um die Anfrage zu beantworten, Wabdy zu prüfen oder abzusichern, Missbrauch zu verhindern und geltende rechtliche Verpflichtungen zu erfüllen. Soweit die DSGVO gilt, sind die Rechtsgrundlagen die berechtigten Interessen des Verantwortlichen an Support sowie Sicherheit und Zuverlässigkeit von Wabdy, eine Einwilligung, wenn sie ausdrücklich für optionale Inhalte eingeholt wird, und die Erfüllung einer rechtlichen Verpflichtung, soweit anwendbar. Supportnachrichten werden nicht für Werbung oder sachfremde Profilbildung verwendet.`,
          `Support-E-Mails werden über Apples iCloud-Mail-Infrastruktur abgewickelt. Der E-Mail-Anbieter des Absenders und Apple können Routing- und Kontodaten nach ihren eigenen Bedingungen und Datenschutzhinweisen verarbeiten, möglicherweise außerhalb des Landes des Absenders. Der Verantwortliche verkauft Supportdaten nicht und gibt sie nur weiter, wenn dies für den E-Mail-Betrieb, die Untersuchung der Anfrage, die Einhaltung von Gesetzen oder den Schutz rechtlicher Ansprüche erforderlich ist. Die Korrespondenz wird nur so lange aufbewahrt, wie es für diese Zwecke vernünftigerweise erforderlich ist; berücksichtigt werden der aktive Status der Anfrage und rechtliche, sicherheitsbezogene oder streitbezogene Aufbewahrungsgründe.`,
        ] },
        { title: "6.2 Öffentliche Datenschutz- und Supportseiten", level: 3, blocks: [
          `Die öffentlichen Datenschutz- und Supportseiten von Wabdy werden auf GitHub Pages gehostet. Beim Besuch kann GitHub automatisch technische Websitedaten wie IP-Adresse, Browser- oder Geräteinformationen, Dienstnutzung, Seitenaufrufe und Cookies gemäß der allgemeinen Datenschutzerklärung von GitHub verarbeiten: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Diese Hosting-Protokolle sind keine von der Wabdy-App übertragenen Daten der Fotomediathek, und der Wabdy-Betreiber erhält über GitHub Pages keine Kopie der Fotomediathek des Nutzers.`,
        ] },
        { title: "7. Datenverkauf, Werbung und Tracking", blocks: [
          `Wabdy verkauft keine personenbezogenen Daten, zeigt keine Werbung Dritter, erstellt keine Nutzerprofile und verfolgt keine Aktivitäten über Apps oder Websites hinweg. Die aktuelle App-Store-Datenschutzangabe lautet „Keine Daten erfasst“, da Wabdy nach Apples aktuellen App-Datenschutzdefinitionen keine Daten direkt oder automatisch aus der App erhebt. Vom Nutzer initiierte Supportkorrespondenz sowie von Apple bereitgestellte Analysen oder Diagnosen sind oben beschrieben. Diese Angabe muss überprüft werden, wenn später ein Server, Analysen, Werbung, Ferndiagnosen oder ein weiteres Drittanbieter-SDK hinzugefügt werden.`,
        ] },
        { title: "8. Aufbewahrung und Nutzerkontrollen", blocks: [
          `Nutzer können Berechtigungen für Fotos und Mitteilungen in den iOS-Einstellungen ändern oder widerrufen. Die Wabdy-Einstellungen enthalten Steuerelemente für Erinnerungen und lokalen Fortschritt. Das Zurücksetzen des Sortierfortschritts ist eine separate Aktion.`,
          `Das Löschen von Wabdy entfernt die App-Sandbox im Rahmen des normalen iOS-Verhaltens, macht jedoch bereits in Apple Fotos vorgenommene Änderungen nicht automatisch rückgängig. Alben, Favoriten- oder Ausgeblendet-Status, iCloud-Synchronisierung und Elemente in „Zuletzt gelöscht“ werden von Apple Fotos verwaltet und können nach dem Entfernen der App bestehen bleiben.`,
          `Bezüglich Supportkorrespondenz kann eine Person die Datenschutzadresse kontaktieren, um – soweit gesetzlich vorgesehen – Auskunft, Berichtigung, Löschung, Einschränkung oder Übertragbarkeit ihrer personenbezogenen Daten zu verlangen oder der Verarbeitung zu widersprechen. Beruht die Verarbeitung auf Einwilligung, kann diese ohne Auswirkung auf die Rechtmäßigkeit der vorherigen Verarbeitung widerrufen werden. Eine Beschwerde bei der zuständigen Datenschutzbehörde ist ebenfalls möglich. Vor der Erfüllung einer Anfrage kann eine Identitätsprüfung erforderlich sein. Wabdy verwendet personenbezogene Daten nicht für automatisierte Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung.`,
        ] },
        { title: "9. Kinder und familiäre Nutzung", blocks: [
          `Der Wabdy-Code übermittelt unabhängig vom Alter des Gerätenutzers oder der abgebildeten Person nicht automatisch Daten der Fotomediathek an den Betreiber. Kontaktiert ein Nutzer oder Erziehungsberechtigter freiwillig den Support, wird die Korrespondenz wie in Abschnitt 6 beschrieben behandelt. Der Zugriff auf Fotos wird vom Geräteinhaber und den Apple-ID-Systemeinstellungen gesteuert.`,
        ] },
        { title: "10. Sicherheit", blocks: [
          `Lokale Aufzeichnungen werden in der standardmäßigen iOS-App-Sandbox gespeichert. Keine Speichermethode ist völlig risikofrei, aber Wabdy minimiert die gespeicherten Daten und übermittelt diesen Zustand nicht an einen vom Entwickler kontrollierten Dienst.`,
        ] },
        { title: "11. Änderungen dieser Erklärung", blocks: [
          `Diese Erklärung kann aktualisiert werden, wenn sich Wabdy-Funktionen oder rechtliche Anforderungen ändern. Das Gültigkeitsdatum am Anfang der veröffentlichten Fassung wird aktualisiert. Wesentliche Änderungen werden gegebenenfalls in der App oder im App-Store-Eintrag bekannt gegeben.`,
        ] },
        { title: "12. Kontakt", blocks: [
          `Fragen oder Datenschutzanfragen können an inner-norms8f@icloud.com gesendet werden. Verantwortlicher Betreiber dieser Erklärung ist Roman Danilin.`,
        ] },
      ],
    },
    support: {
      title: "Support",
      privacyLink: "Wabdy-Datenschutzerklärung lesen",
      sections: [
        { title: "Kontakt", blocks: [
          `Für Support, Feedback oder Fragen zur Barrierefreiheit von Wabdy — Photo Curator schreibe an inner-norms8f@icloud.com.`,
          `Gib die Wabdy-Version, iOS-Version, das Gerätemodell und eine kurze Schrittfolge zur Reproduktion des Problems an. Hänge keine privaten Fotos an, außer sie sind erforderlich und du hast ihren Inhalt geprüft.`,
        ] },
        { title: "Häufige Fragen", blocks: [] },
        { title: "Lädt Wabdy meine Fotomediathek hoch?", level: 3, blocks: [
          `Nein. Wabdy lädt die Mediathek nicht auf einen Entwicklerserver hoch. Apple Fotos kann ausschließlich in iCloud gespeicherte Medien gemäß den iCloud-Einstellungen des Geräts herunterladen.`,
        ] },
        { title: "Kann Wabdy eine Systemlöschung wiederherstellen?", level: 3, blocks: [
          `Nach der Löschbestätigung durch iOS erfolgt die Wiederherstellung über „Zuletzt gelöscht“ in Apple Fotos. Wabdy kann nur rückgängig machen, solange das Element in der lokalen Warteschlange aussteht oder wenn eine protokollierte Albumaktion sicher umgekehrt werden kann.`,
        ] },
        { title: "Wie entferne ich lokale Wabdy-Daten?", level: 3, blocks: [
          `In den Einstellungen gibt es eine Option für den Sortierfortschritt. Das Entfernen der App löscht ihre Sandbox im Rahmen des normalen iOS-Verhaltens, macht jedoch bereits in Apple Fotos vorgenommene Änderungen nicht automatisch rückgängig.`,
        ] },
      ],
    },
  },

  "pt-BR": {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "Privacidade", support: "Suporte", language: "Idioma", primaryLabel: "Navegação principal" },
    meta: {
      home: "Informações oficiais de privacidade e suporte do Wabdy — Photo Curator.",
      privacy: "Política de Privacidade do Wabdy — Photo Curator.",
      support: "Suporte do Wabdy — Photo Curator.",
    },
    home: {
      title: "Sua fototeca continua sendo sua.",
      description: "O Wabdy ajuda a organizar fotos diretamente no iPhone. Sem conta, sem anúncios, sem servidor operado pelo desenvolvedor e sem envio automático da sua fototeca.",
      informationLabel: "Informações",
      cards: [
        { path: "privacy", title: "Política de Privacidade", description: "Como o Wabdy lida com o acesso ao Fotos, o processamento local, o compartilhamento e seus controles." },
        { path: "support", title: "Suporte", description: "Informações de contato e respostas a perguntas frequentes." },
      ],
    },
    privacy: {
      title: "Política de Privacidade",
      effectiveLabel: "Data de vigência", effectiveDate: "28 de agosto de 2026",
      operatorLabel: "Operador e controlador de dados", operator: "Roman Danilin",
      contactLabel: "Contato de privacidade", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. Resumo", blocks: [
          `O Wabdy é um aplicativo de organização de fotos que funciona no dispositivo. Ele não exige uma conta e não opera um servidor controlado pelo desenvolvedor. O código atual do Wabdy não envia automaticamente ao desenvolvedor fotos, vídeos, identificadores da fototeca, ajustes, eventos de uso nem identificadores de publicidade. O aplicativo não contém publicidade, telemetria controlada pelo desenvolvedor, análises de terceiros, rastreamento nem SDK remoto de relatórios de falhas. A Apple pode fornecer separadamente ao operador dados agregados do App Analytics e relatórios de falhas ou diagnósticos de usuários que concordaram em compartilhá-los, conforme os ajustes do usuário e as práticas de privacidade da Apple.`,
          `O Wabdy pode solicitar ao framework Fotos da Apple que baixe um item armazenado no Fotos do iCloud que ainda não esteja disponível no dispositivo. Essa transferência é realizada pela Apple conforme os ajustes de iCloud do proprietário do dispositivo; não é um envio para um servidor do Wabdy.`,
        ] },
        { title: "2. Acesso à fototeca", blocks: [
          `Com permissão, o Wabdy pode ler fotos, vídeos, Live Photos, álbuns e metadados relacionados disponíveis pelo Apple Photos. Isso inclui identificadores locais do Fotos, datas de criação, tipo de mídia, dimensões, duração e os estados de favorito, oculto, sequência ou captura de tela necessários para exibir, filtrar e organizar a fototeca.`,
          `Sob comando do usuário, o Wabdy pode:`,
          [
            `adicionar ou remover itens de um álbum do usuário;`,
            `criar um álbum do usuário;`,
            `alterar o estado de favorito ou oculto de um item;`,
            `preparar uma fila local de revisão e solicitar ao Apple Photos que mova itens confirmados para Apagados.`,
          ],
          `O iOS controla a permissão da fototeca e apresenta sua própria confirmação antes da exclusão pelo sistema. O Wabdy não copia a fototeca para um serviço controlado pelo desenvolvedor.`,
        ] },
        { title: "3. Análise no dispositivo", blocks: [
          `A preparação de miniaturas e as sugestões opcionais de fotos semelhantes são executadas no dispositivo usando frameworks da Apple, incluindo o Vision. As representações de características usadas na comparação de semelhança ficam apenas em um cache limitado na memória durante a sessão do aplicativo, são removidas quando necessário e não são salvas nem enviadas pelo Wabdy.`,
        ] },
        { title: "4. Informações armazenadas localmente", blocks: [
          `O Wabdy armazena somente o estado local mínimo necessário para oferecer seus recursos:`,
          [
            `idioma, aparência, filtros, escolhas de data e intervalo, modo de exclusão, álbum selecionado, estado da introdução, contadores, preferência de lembrete e posição de retomada;`,
            `identificadores locais do Fotos necessários para o progresso do baralho, o fluxo de “novas fotos”, a fila pendente de revisão da Lixeira, o recurso de desfazer e a remoção segura de associações a álbuns criadas anteriormente pelo Wabdy.`,
          ],
          `Enquanto está ativo, o Wabdy também lê a capacidade disponível do dispositivo para mostrar um aviso de pouco armazenamento. Esse valor não é enviado ao desenvolvedor.`,
          `Algumas preferências do aplicativo podem ser incluídas em um backup gerenciado pela Apple de acordo com os ajustes do usuário. Registros maiores do Wabdy são marcados para exclusão do backup. O Wabdy não opera nem recebe esses backups.`,
        ] },
        { title: "5. Notificações", blocks: [
          `Os lembretes de organização são notificações locais opcionais. Quando ativados, o iOS os armazena e entrega no dispositivo. Dependendo do lembrete escolhido, uma notificação pode conter a meta de organização definida no dispositivo, a quantidade restante até a meta ou uma sequência de dias de organização. Ela não contém identificadores do Fotos, nomes de arquivos, conteúdo de fotos ou vídeos nem carga de análise. O Wabdy não usa servidor de notificações, notificações push remotas nem Live Activities na versão atual.`,
        ] },
        { title: "6. Compartilhamento e serviços da plataforma", blocks: [
          `O Wabdy usa serviços da plataforma Apple, como Fotos/Fotos do iCloud, Vision, UserNotifications e a folha de compartilhamento do iOS. O tratamento desses serviços pela Apple é regido pelos termos e pela política de privacidade da Apple.`,
          `A mídia só sai do sandbox do Wabdy depois que o usuário abre a folha de compartilhamento do sistema e escolhe um destino. O aplicativo ou destinatário selecionado processa o material de acordo com suas próprias práticas de privacidade. O Wabdy remove arquivos temporários de exportação após o compartilhamento quando possível; eles também ficam sujeitos ao gerenciamento de arquivos temporários do iOS.`,
          `O Wabdy não envia dados pessoais a parceiros terceiros escolhidos pelo desenvolvedor. O destino na folha de compartilhamento é escolhido pelo usuário, não pelo Wabdy nem por seu operador.`,
        ] },
        { title: "6.1 Correspondência com o suporte", level: 3, blocks: [
          `Se uma pessoa entrar voluntariamente em contato com o suporte, o controlador indicado no início desta política receberá as informações incluídas na mensagem. Isso pode incluir nome e endereço de e-mail do remetente, texto da mensagem, detalhes do aplicativo, iOS e dispositivo, além de anexos que o remetente decidir fornecer. Não envie fotos particulares nem outros materiais sensíveis, a menos que isso seja necessário e o conteúdo tenha sido revisado.`,
          `A correspondência de suporte é processada para responder à solicitação, solucionar problemas ou proteger o Wabdy, prevenir abuso e cumprir obrigações legais aplicáveis. Quando o GDPR for aplicável, as bases legais serão os interesses legítimos do controlador em oferecer suporte e manter a segurança e a confiabilidade do Wabdy, o consentimento quando solicitado especificamente para materiais opcionais e o cumprimento de obrigação legal quando aplicável. Mensagens de suporte não são usadas para publicidade nem criação de perfis sem relação com a solicitação.`,
          `O e-mail de suporte é processado pela infraestrutura do iCloud Mail da Apple. O provedor de e-mail do remetente e a Apple podem processar dados de roteamento e conta segundo seus próprios termos e avisos, possivelmente fora do país do remetente. O controlador não vende dados de suporte nem os divulga a outro destinatário, salvo quando necessário para operar o e-mail, investigar a solicitação, cumprir a lei ou proteger direitos legais. A correspondência é mantida apenas pelo tempo razoavelmente necessário para esses fins, considerando se a solicitação continua ativa e se uma necessidade legal, de segurança ou relacionada a disputa exige sua retenção.`,
        ] },
        { title: "6.2 Páginas públicas de privacidade e suporte", level: 3, blocks: [
          `As páginas públicas de privacidade e suporte do Wabdy são hospedadas no GitHub Pages. Ao visitá-las, o GitHub pode processar automaticamente dados técnicos do site, como endereço IP, informações do navegador ou dispositivo, uso do serviço, visualizações de página e cookies, de acordo com a Declaração Geral de Privacidade do GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. Esses registros de hospedagem não são dados da fototeca transmitidos pelo aplicativo Wabdy, e o operador do Wabdy não recebe pelo GitHub Pages uma cópia da fototeca do usuário.`,
        ] },
        { title: "7. Venda de dados, publicidade e rastreamento", blocks: [
          `O Wabdy não vende dados pessoais, não mostra publicidade de terceiros, não cria perfis de usuários nem rastreia atividades entre aplicativos ou sites. A declaração atual de privacidade na App Store é “Dados não coletados”, porque o Wabdy não coleta direta ou automaticamente dados do aplicativo segundo as definições atuais da Apple. A correspondência iniciada pelo usuário e as análises ou diagnósticos fornecidos pela Apple são descritos acima. Essa declaração deve ser revista se o produto futuramente adicionar um servidor, análises, publicidade, diagnóstico remoto ou outro SDK de terceiros.`,
        ] },
        { title: "8. Retenção e controles do usuário", blocks: [
          `O usuário pode alterar ou retirar as permissões de Fotos e notificações nos Ajustes do iOS. Os ajustes do Wabdy oferecem controles para lembretes e progresso local. Redefinir o progresso da organização é uma ação separada.`,
          `Apagar o Wabdy remove seu sandbox conforme o funcionamento normal do iOS, mas não reverte automaticamente alterações já realizadas no Apple Photos. Álbuns, estados de favorito ou oculto, sincronização do iCloud e itens em Apagados são gerenciados pelo Apple Photos e podem permanecer após a remoção do aplicativo.`,
          `Em relação à correspondência de suporte, uma pessoa pode entrar em contato pelo endereço de privacidade para solicitar acesso, correção, exclusão, restrição ou portabilidade de seus dados pessoais, ou se opor ao processamento quando a lei aplicável conceder esse direito. Quando o processamento se basear em consentimento, ele poderá ser retirado sem afetar o processamento anterior lícito. Também é possível apresentar reclamação à autoridade de proteção de dados competente. Pode ser necessário verificar a identidade antes de atender à solicitação. O Wabdy não usa dados pessoais para decisões automatizadas com efeitos legais ou de importância semelhante.`,
        ] },
        { title: "9. Crianças e uso familiar", blocks: [
          `O código do Wabdy não transmite automaticamente dados da fototeca ao operador, independentemente da idade do usuário do dispositivo ou da pessoa retratada. Se um usuário ou responsável entrar voluntariamente em contato com o suporte, a correspondência será tratada conforme a seção 6. O acesso ao Fotos é controlado pelo proprietário do dispositivo e pelos ajustes do ID Apple.`,
        ] },
        { title: "10. Segurança", blocks: [
          `Os registros locais ficam no sandbox padrão de aplicativos do iOS. Nenhum método de armazenamento é totalmente livre de riscos, mas o Wabdy minimiza os dados armazenados e não transmite esse estado a um serviço controlado pelo desenvolvedor.`,
        ] },
        { title: "11. Alterações nesta política", blocks: [
          `Esta política pode ser atualizada quando os recursos do Wabdy ou os requisitos legais mudarem. A data de vigência no início da versão publicada será atualizada. Alterações relevantes serão informadas pelo aplicativo ou por sua página na App Store quando apropriado.`,
        ] },
        { title: "12. Contato", blocks: [
          `Dúvidas ou solicitações de privacidade podem ser enviadas para inner-norms8f@icloud.com. O operador responsável por esta política é Roman Danilin.`,
        ] },
      ],
    },
    support: {
      title: "Suporte",
      privacyLink: "Ler a Política de Privacidade do Wabdy",
      sections: [
        { title: "Contato", blocks: [
          `Para suporte, comentários ou questões de acessibilidade sobre o Wabdy — Photo Curator, envie um e-mail para inner-norms8f@icloud.com.`,
          `Inclua a versão do Wabdy, a versão do iOS, o modelo do dispositivo e uma lista curta de etapas para reproduzir o problema. Não anexe fotos particulares, a menos que isso seja necessário e você tenha revisado o conteúdo.`,
        ] },
        { title: "Perguntas frequentes", blocks: [] },
        { title: "O Wabdy envia minha fototeca?", level: 3, blocks: [
          `Não. O Wabdy não envia a fototeca para um servidor do desenvolvedor. O Apple Photos pode baixar mídias disponíveis apenas no iCloud conforme os ajustes de iCloud do dispositivo.`,
        ] },
        { title: "O Wabdy pode restaurar uma exclusão do sistema?", level: 3, blocks: [
          `Depois que o iOS confirma a exclusão, a recuperação é gerenciada em Apagados no Apple Photos. O Wabdy só pode desfazer enquanto o item continuar na fila local pendente ou quando puder reverter com segurança uma operação de álbum registrada.`,
        ] },
        { title: "Como removo os dados locais do Wabdy?", level: 3, blocks: [
          `Os Ajustes oferecem um controle para o progresso da organização. Remover o aplicativo apaga seu sandbox conforme o funcionamento normal do iOS, mas não reverte automaticamente alterações já feitas no Apple Photos.`,
        ] },
      ],
    },
  },

  ja: {
    productName: "Wabdy — Photo Curator",
    nav: { privacy: "プライバシー", support: "サポート", language: "言語", primaryLabel: "メインナビゲーション" },
    meta: {
      home: "Wabdy — Photo Curator の公式プライバシーおよびサポート情報です。",
      privacy: "Wabdy — Photo Curator のプライバシーポリシーです。",
      support: "Wabdy — Photo Curator のサポート情報です。",
    },
    home: {
      title: "あなたの写真ライブラリは、あなたのものです。",
      description: "Wabdy は iPhone 上で写真を整理します。アカウント、広告、開発者運営サーバーは不要で、写真ライブラリが自動的にアップロードされることもありません。",
      informationLabel: "情報",
      cards: [
        { path: "privacy", title: "プライバシーポリシー", description: "Wabdy による写真へのアクセス、端末内処理、共有、ユーザー管理について説明します。" },
        { path: "support", title: "サポート", description: "お問い合わせ先とよくある質問をご案内します。" },
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      effectiveLabel: "発効日", effectiveDate: "2026年8月28日",
      operatorLabel: "運営者およびデータ管理者", operator: "Roman Danilin",
      contactLabel: "プライバシーに関する連絡先", contact: "inner-norms8f@icloud.com",
      sections: [
        { title: "1. 概要", blocks: [
          `Wabdy は端末上で動作する写真整理アプリです。アカウントは不要で、開発者が管理するサーバーも運用していません。現在の Wabdy は、写真、ビデオ、写真ライブラリの識別子、設定、利用イベント、広告識別子を開発者へ自動送信しません。広告、開発者管理のテレメトリ、第三者分析、トラッキング、リモートのクラッシュ報告 SDK も含まれていません。Apple は、共有に同意したユーザーについて、ユーザーの Apple 設定および Apple のプライバシー慣行に従い、集計された App Analytics やクラッシュ・診断レポートを運営者へ別途提供する場合があります。`,
          `端末上にない項目が iCloud 写真に保存されている場合、Wabdy は Apple の写真フレームワークにダウンロードを依頼することがあります。この転送は端末所有者の iCloud 設定に基づいて Apple が行うもので、Wabdy のサーバーへのアップロードではありません。`,
        ] },
        { title: "2. 写真ライブラリへのアクセス", blocks: [
          `許可を得た場合、Wabdy は Apple Photos を通じて利用可能な写真、ビデオ、Live Photos、アルバム、および関連メタデータを読み取れます。これには、表示、絞り込み、整理に必要なローカルの Photos 識別子、作成日、メディア種別、寸法、再生時間、お気に入り、非表示、バースト、スクリーンショットの状態が含まれます。`,
          `ユーザーの操作により、Wabdy は次の処理を行えます。`,
          [
            `ユーザーアルバムへの項目の追加または削除`,
            `ユーザーアルバムの作成`,
            `項目のお気に入りまたは非表示状態の変更`,
            `ローカルの確認キューを作成し、確認済み項目を「最近削除した項目」へ移動するよう Apple Photos に依頼`,
          ],
          `写真ライブラリの許可は iOS が管理し、システム削除の前には iOS 自身の確認画面が表示されます。Wabdy がライブラリを開発者管理のサービスへコピーすることはありません。`,
        ] },
        { title: "3. 端末内分析", blocks: [
          `サムネイルの生成と、任意で利用できる類似写真のヒントは、Vision を含む Apple のフレームワークを使用して端末上で実行されます。類似度比較に用いる特徴表現は、アプリのセッション中だけ容量が制限されたメモリキャッシュに保持され、必要に応じて破棄されます。Wabdy が永続保存またはアップロードすることはありません。`,
        ] },
        { title: "4. 端末内に保存される情報", blocks: [
          `Wabdy は、機能の提供に必要な最小限のローカル状態を保存します。`,
          [
            `言語、外観、フィルタ、日付と範囲、削除方法、選択したアルバム、初期設定の状態、カウンター、リマインダー設定、再開位置`,
            `デッキの進捗、「新しい写真」の処理、保留中のゴミ箱確認キュー、取り消し、および Wabdy が以前作成したアルバム関連付けの安全な解除に必要なローカル Photos 識別子`,
          ],
          `Wabdy は使用中に端末の空き容量も読み取り、ストレージ不足の警告を表示します。この値は開発者へ送信されません。`,
          `一部のアプリ設定は、ユーザーのシステム設定に従って Apple 管理の端末バックアップに含まれる場合があります。容量の大きい Wabdy の記録はバックアップ対象外に設定されます。Wabdy がこれらのバックアップを運用または受信することはありません。`,
        ] },
        { title: "5. 通知", blocks: [
          `写真整理のリマインダーは任意のローカル通知です。有効にすると、iOS が端末上で保存し配信します。選択したリマインダーに応じて、端末内で設定した整理目標、目標までの残り件数、または整理を継続した日数が通知に含まれる場合があります。Photos 識別子、ファイル名、写真・ビデオの内容、分析用データは含まれません。現在のリリースでは、Wabdy は通知サーバー、リモートプッシュ通知、Live Activities を使用しません。`,
        ] },
        { title: "6. 共有とプラットフォームサービス", blocks: [
          `Wabdy は、写真／iCloud 写真、Vision、UserNotifications、iOS の共有シートなど Apple のプラットフォームサービスを使用します。これらのサービスにおける Apple のデータ取扱いには、Apple の利用条件とプライバシーポリシーが適用されます。`,
          `メディアが Wabdy のサンドボックス外へ出るのは、ユーザーがシステムの共有シートを開いて送信先を選択した後だけです。選択したアプリまたは受信者は、各自のプライバシー慣行に従ってデータを処理します。Wabdy は可能な場合、共有処理後に一時的な書き出しファイルを削除します。これらのファイルには iOS の一時ファイル管理も適用されます。`,
          `Wabdy は、開発者が選んだ第三者パートナーへ個人データを送信しません。共有シートの送信先を選ぶのはユーザーであり、Wabdy または運営者ではありません。`,
        ] },
        { title: "6.1 サポートへの連絡", level: 3, blocks: [
          `ユーザーが任意でサポートへ連絡した場合、本ポリシー冒頭に記載されたデータ管理者が、そのメッセージに含まれる情報を受け取ります。送信者の氏名とメールアドレス、メッセージ本文、アプリ・iOS・端末の情報、および送信者が選んだ添付ファイルが含まれることがあります。必要性があり、内容を確認済みの場合を除き、非公開の写真やその他の機微な資料を送らないでください。`,
          `サポート対応の情報は、問い合わせへの回答、Wabdy の問題解決または保護、不正利用の防止、適用される法的義務の履行のために処理されます。GDPR が適用される場合、法的根拠は、サポート提供ならびに Wabdy の安全性・信頼性維持に関する管理者の正当な利益、任意資料について明示的に求めた場合の同意、該当する場合の法的義務の履行です。サポートメッセージを広告や無関係なプロファイリングに使用することはありません。`,
          `サポートメールは Apple の iCloud Mail 基盤を使用して処理されます。送信者のメール事業者と Apple は、それぞれの条件とプライバシー通知に従って、送信者の国以外でルーティング情報やアカウント情報を処理する場合があります。管理者はサポートデータを販売せず、メール運用、問い合わせの調査、法令遵守、法的権利の保護に必要な場合を除き、他の受領者へ開示しません。対応中かどうか、また法務、安全性、紛争上の保存理由があるかを考慮し、これらの目的に合理的に必要な期間だけ保存します。`,
        ] },
        { title: "6.2 公開プライバシーおよびサポートページ", level: 3, blocks: [
          `Wabdy の公開プライバシーおよびサポートページは GitHub Pages でホストされています。訪問時、GitHub は一般プライバシー声明に従い、IP アドレス、ブラウザや端末の情報、サービス利用状況、ページ閲覧、Cookie などの技術的なウェブサイトデータを自動処理する場合があります: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. これらのホスティングログは Wabdy アプリから送信された写真ライブラリのデータではなく、Wabdy の運営者が GitHub Pages を通じてユーザーの写真ライブラリのコピーを受け取ることもありません。`,
        ] },
        { title: "7. データ販売、広告、トラッキング", blocks: [
          `Wabdy は個人データを販売せず、第三者広告を表示せず、ユーザープロファイルを作成せず、アプリやウェブサイトをまたいだ行動追跡を行いません。Apple の現行 App プライバシー定義に基づき、Wabdy はアプリからデータを直接または自動で収集しないため、現在の App Store プライバシー申告は「データの収集なし」です。ユーザーが開始したサポート連絡と、Apple が提供する分析または診断については上記に説明しています。将来、サーバー、分析、広告、リモート診断、その他の第三者 SDK を追加する場合は、この申告を見直します。`,
        ] },
        { title: "8. 保存期間とユーザーによる管理", blocks: [
          `ユーザーは iOS の設定で写真と通知の許可を変更または取り消せます。Wabdy の設定には、リマインダーとローカル進捗の管理項目があります。整理の進捗をリセットする操作は別に用意されています。`,
          `Wabdy を削除すると、通常の iOS の動作に従ってアプリのサンドボックスが削除されますが、Apple Photos ですでに行われた変更が自動的に元に戻ることはありません。アルバム、お気に入り／非表示の状態、iCloud 同期、「最近削除した項目」は Apple Photos が管理し、アプリ削除後も残る場合があります。`,
          `サポート連絡の個人データについて、適用法で認められる場合、プライバシー連絡先にアクセス、訂正、削除、処理制限、データポータビリティを請求し、または処理に異議を申し立てることができます。同意に基づく処理については、撤回前の適法な処理に影響を与えずに同意を撤回できます。居住地または対象処理を管轄するデータ保護機関へ申し立てることもできます。請求への対応前に本人確認が必要となる場合があります。Wabdy は、法的または同等に重大な影響を生じる自動意思決定に個人データを使用しません。`,
        ] },
        { title: "9. 子どもと家族での利用", blocks: [
          `端末利用者や写っている人物の年齢にかかわらず、Wabdy のコードが写真ライブラリのデータを運営者へ自動送信することはありません。ユーザーまたは保護者が任意でサポートへ連絡した場合、その連絡は第6節の説明に従って処理されます。写真へのアクセスは端末所有者と Apple ID のシステム設定によって管理されます。`,
        ] },
        { title: "10. セキュリティ", blocks: [
          `ローカル記録は標準の iOS アプリサンドボックス内に保存されます。完全にリスクのない保存方法はありませんが、Wabdy は保存データを最小限に抑え、その状態を開発者管理のサービスへ送信しません。`,
        ] },
        { title: "11. 本ポリシーの変更", blocks: [
          `Wabdy の機能または法的要件の変更に応じて、本ポリシーを更新する場合があります。公開版冒頭の発効日も更新します。重要な変更は、必要に応じてアプリまたは App Store の掲載情報でお知らせします。`,
        ] },
        { title: "12. お問い合わせ", blocks: [
          `プライバシーに関する質問または請求は inner-norms8f@icloud.com へお送りください。本ポリシーの責任運営者は Roman Danilin です。`,
        ] },
      ],
    },
    support: {
      title: "サポート",
      privacyLink: "Wabdy のプライバシーポリシーを読む",
      sections: [
        { title: "お問い合わせ", blocks: [
          `Wabdy — Photo Curator のサポート、フィードバック、アクセシビリティに関するお問い合わせは inner-norms8f@icloud.com までお送りください。`,
          `Wabdy のバージョン、iOS のバージョン、端末モデル、問題を再現するための短い手順を記載してください。必要性があり、内容を確認済みの場合を除き、非公開の写真を添付しないでください。`,
        ] },
        { title: "よくある質問", blocks: [] },
        { title: "Wabdy は写真ライブラリをアップロードしますか？", level: 3, blocks: [
          `いいえ。Wabdy は写真ライブラリを開発者のサーバーへアップロードしません。Apple Photos は端末の iCloud 設定に従って、iCloud にのみ存在するメディアをダウンロードする場合があります。`,
        ] },
        { title: "Wabdy でシステム削除を復元できますか？", level: 3, blocks: [
          `iOS で削除を確定した後は、Apple Photos の「最近削除した項目」から復元します。Wabdy が取り消せるのは、項目がローカルの保留キューに残っている場合、または記録済みのアルバム操作を安全に元へ戻せる場合だけです。`,
        ] },
        { title: "Wabdy のローカルデータを削除するには？", level: 3, blocks: [
          `設定には写真整理の進捗を管理する項目があります。アプリを削除すると通常の iOS の動作に従ってサンドボックスが消去されますが、Apple Photos ですでに行われた変更が自動的に元へ戻ることはありません。`,
        ] },
      ],
    },
  },
};
