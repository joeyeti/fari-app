export type ITranslationKeys =
  | "bugs-route.meta.description"
  | "bugs-route.meta.title"
  | "card-collection-route.card-collection-name"
  | "character-dialog.block-type.dice-pool"
  | "character-dialog.block-type.image"
  | "character-dialog.block-type.link"
  | "character-dialog.block-type.link.display-name"
  | "character-dialog.block-type.numeric"
  | "character-dialog.block-type.point-counter"
  | "character-dialog.block-type.separator"
  | "character-dialog.block-type.skill"
  | "character-dialog.block-type.slot-tracker"
  | "character-dialog.block-type.text"
  | "character-dialog.close-confirmation"
  | "character-dialog.control.add-block"
  | "character-dialog.control.add-box"
  | "character-dialog.control.add-column"
  | "character-dialog.control.add-label"
  | "character-dialog.control.add-max"
  | "character-dialog.control.add-one"
  | "character-dialog.control.add-row"
  | "character-dialog.control.add-section"
  | "character-dialog.control.add-segment"
  | "character-dialog.control.add-sub-card"
  | "character-dialog.control.add-toggle"
  | "character-dialog.control.advanced-mode"
  | "character-dialog.control.as-clock"
  | "character-dialog.control.as-track"
  | "character-dialog.control.copy-block"
  | "character-dialog.control.copy-section-blocks"
  | "character-dialog.control.delete-block"
  | "character-dialog.control.delete-column"
  | "character-dialog.control.delete-row"
  | "character-dialog.control.delete-section"
  | "character-dialog.control.duplicate"
  | "character-dialog.control.hide-display-name"
  | "character-dialog.control.hide-modifer"
  | "character-dialog.control.move"
  | "character-dialog.control.move-column-left"
  | "character-dialog.control.move-column-right"
  | "character-dialog.control.move-row-down"
  | "character-dialog.control.move-row-up"
  | "character-dialog.control.move-section-down"
  | "character-dialog.control.move-section-up"
  | "character-dialog.control.paste-blocks"
  | "character-dialog.control.refresh"
  | "character-dialog.control.remove-block"
  | "character-dialog.control.remove-box"
  | "character-dialog.control.remove-label"
  | "character-dialog.control.remove-max"
  | "character-dialog.control.remove-one"
  | "character-dialog.control.remove-segment"
  | "character-dialog.control.remove-toggle"
  | "character-dialog.control.set-dice"
  | "character-dialog.control.set-main-counter"
  | "character-dialog.control.show-display-name"
  | "character-dialog.control.show-modifier"
  | "character-dialog.control.stored"
  | "character-dialog.control.unset-main-counter"
  | "character-dialog.control.visible-on-card"
  | "character-dialog.control.wide-mode"
  | "character-dialog.control.width"
  | "character-dialog.control.zoom"
  | "character-dialog.delete-section-confirmation"
  | "character-dialog.export"
  | "character-dialog.export-as-template"
  | "character-dialog.group"
  | "character-dialog.helper-text.empty-dice-pool"
  | "character-dialog.helper-text.help"
  | "character-dialog.helper-text.invalid-link"
  | "character-dialog.image-block.dialog.add-image"
  | "character-dialog.image-block.dialog.close"
  | "character-dialog.image-block.dialog.description"
  | "character-dialog.image-block.dialog.error"
  | "character-dialog.image-block.dialog.image-url-label"
  | "character-dialog.image-block.dialog.title"
  | "character-dialog.image-block.dialog.upload"
  | "character-dialog.label.link"
  | "character-dialog.load-template"
  | "character-dialog.load-template-confirmation"
  | "character-dialog.name"
  | "character-dialog.print"
  | "character-dialog.remove-page-confirmation"
  | "character-dialog.save"
  | "character-dialog.saved"
  | "character-dialog.skill-block.missing-dice-commands"
  | "character-dialog.skill-block.roll"
  | "cookie-consent.button"
  | "cookie-consent.description"
  | "data-route.delete"
  | "data-route.delete-confirmation"
  | "data-route.export"
  | "data-route.filter-by-group"
  | "data-route.filter-by-name"
  | "data-route.filter-by-type"
  | "data-route.group"
  | "data-route.import"
  | "data-route.import-and-duplicate"
  | "data-route.item-type.character"
  | "data-route.item-type.index-card-collection"
  | "data-route.item-type.scene"
  | "data-route.last-updated"
  | "data-route.meta.description"
  | "data-route.meta.title"
  | "data-route.name"
  | "data-route.none"
  | "data-route.selected-size"
  | "data-route.size"
  | "data-route.total-size"
  | "data-route.type"
  | "dice-fab.pool"
  | "dice-fab.roll"
  | "dice-route.meta.description"
  | "dice-route.meta.title"
  | "docs.book-of-monsters.description"
  | "docs.book-of-monsters.title"
  | "docs.cheat-sheet.description"
  | "docs.cheat-sheet.title"
  | "docs.dials.description"
  | "docs.dials.title"
  | "docs.fari-wiki.description"
  | "docs.fari-wiki.title"
  | "docs.fate-accelerated.description"
  | "docs.fate-accelerated.title"
  | "docs.fate-adversary-toolkit.description"
  | "docs.fate-adversary-toolkit.title"
  | "docs.fate-condensed.description"
  | "docs.fate-condensed.title"
  | "docs.fate-core.description"
  | "docs.fate-core.title"
  | "docs.fate-stunts.description"
  | "docs.fate-stunts.title"
  | "docs.fate-system-toolkit.description"
  | "docs.fate-system-toolkit.title"
  | "docs.success-with-style.description"
  | "docs.success-with-style.title"
  | "donation.kofi"
  | "donation.patreon"
  | "draw-route.meta.description"
  | "draw-route.meta.title"
  | "feature-requests-route.meta.description"
  | "feature-requests-route.meta.title"
  | "home-route.cards.blog.cta"
  | "home-route.cards.blog.description"
  | "home-route.cards.blog.title"
  | "home-route.cards.characters.cta"
  | "home-route.cards.characters.description"
  | "home-route.cards.characters.title"
  | "home-route.cards.data.cta"
  | "home-route.cards.data.description"
  | "home-route.cards.data.title"
  | "home-route.cards.dice-pool.cta"
  | "home-route.cards.dice-pool.description"
  | "home-route.cards.dice-pool.title"
  | "home-route.cards.dice-roller.cta"
  | "home-route.cards.dice-roller.description"
  | "home-route.cards.dice-roller.title"
  | "home-route.cards.play-solo.cta"
  | "home-route.cards.play-solo.description"
  | "home-route.cards.play-solo.title"
  | "home-route.cards.scenes.cta"
  | "home-route.cards.scenes.description"
  | "home-route.cards.scenes.title"
  | "home-route.cards.srds.cta"
  | "home-route.cards.srds.description"
  | "home-route.cards.srds.title"
  | "home-route.cards.wiki.cta"
  | "home-route.cards.wiki.description"
  | "home-route.cards.wiki.title"
  | "home-route.header.cta"
  | "home-route.header.logo-title"
  | "home-route.header.stats"
  | "home-route.header.subtitle"
  | "home-route.header.title"
  | "home-route.meta.description"
  | "home-route.meta.title"
  | "home-route.play-offline.button"
  | "home-route.play-offline.description"
  | "home-route.play-offline.title"
  | "home-route.play-online.button"
  | "home-route.play-online.description"
  | "home-route.play-online.title"
  | "home-route.sections.getting-started.sub-title"
  | "home-route.sections.getting-started.title"
  | "home-route.sections.join-community.cta"
  | "home-route.sections.join-community.sub-title"
  | "home-route.sections.join-community.title"
  | "home-route.sections.open-source.cta"
  | "home-route.sections.open-source.description"
  | "home-route.sections.open-source.sub-title"
  | "home-route.sections.open-source.title"
  | "home-route.sections.patreon.title"
  | "home-route.sections.request-a-feature.cta"
  | "home-route.sections.tools.title"
  | "home-route.support-fari.description"
  | "home-route.support-fari.title"
  | "index-card.add-block"
  | "index-card.collapse"
  | "index-card.duplicate"
  | "index-card.expand"
  | "index-card.mark-private"
  | "index-card.mark-public"
  | "index-card.move-to"
  | "index-card.pin"
  | "index-card.remove"
  | "index-card.remove-confirmation"
  | "index-card.unpin"
  | "manager.deleted"
  | "manager.leave-without-saving"
  | "manager.undo"
  | "menu.blog"
  | "menu.characters"
  | "menu.data"
  | "menu.dice"
  | "menu.dice-pool"
  | "menu.discord"
  | "menu.elements.import"
  | "menu.fari-wiki"
  | "menu.feature-requests"
  | "menu.github"
  | "menu.ko-fi"
  | "menu.languages"
  | "menu.my-binder"
  | "menu.oracle"
  | "menu.patreon"
  | "menu.report-a-bug"
  | "menu.resources"
  | "menu.scenes"
  | "menu.seelie-squire"
  | "menu.srds"
  | "menu.success-with-style-blog"
  | "menu.toggle-theme"
  | "menu.tools"
  | "menu.whats-new"
  | "my-binder.all-my-data"
  | "my-binder.element.delete"
  | "my-binder.element.duplicate"
  | "my-binder.element.export"
  | "my-binder.element.export-as-template"
  | "my-binder.elements.new"
  | "my-binder.folder.characters"
  | "my-binder.folder.empty"
  | "my-binder.folder.index-card-collections"
  | "my-binder.folder.scenes"
  | "my-binder.import-dialog.add-as-new"
  | "my-binder.import-dialog.description"
  | "my-binder.import-dialog.title"
  | "my-binder.import-dialog.update-existing"
  | "my-binder.search"
  | "my-binder.search-in"
  | "oracle-route.meta.description"
  | "oracle-route.meta.title"
  | "oracle.value.No"
  | "oracle.value.NoAnd"
  | "oracle.value.Yes"
  | "oracle.value.YesAnd"
  | "oracle.value.YesBut"
  | "page.privacy-policy"
  | "play-route.add-index-card"
  | "play-route.assign-character-sheet"
  | "play-route.clone-and-load-scene"
  | "play-route.collapse-all"
  | "play-route.connect-to-game"
  | "play-route.connected"
  | "play-route.copy-game-link"
  | "play-route.error.description1"
  | "play-route.error.description2"
  | "play-route.error.title"
  | "play-route.error.webRTC"
  | "play-route.expand-all"
  | "play-route.fire-rainbow-confetti"
  | "play-route.fire-red-confetti"
  | "play-route.gm-add-gm-character"
  | "play-route.gm-notes"
  | "play-route.group"
  | "play-route.host-leaving-warning"
  | "play-route.join"
  | "play-route.join-error"
  | "play-route.join-error.connection-issues"
  | "play-route.load-scene"
  | "play-route.new-scene"
  | "play-route.no-aspects"
  | "play-route.pause-session"
  | "play-route.paused-dialog.content"
  | "play-route.paused-dialog.continue"
  | "play-route.paused-dialog.title"
  | "play-route.players"
  | "play-route.private"
  | "play-route.public"
  | "play-route.reset-initiative"
  | "play-route.reset-scene-confirmation"
  | "play-route.save-scene"
  | "play-route.scene-name"
  | "play-route.scene-saved"
  | "play-route.sort"
  | "play-route.sort-options.groups-first"
  | "play-route.sort-options.none"
  | "play-route.sort-options.pinned-first"
  | "play-route.what-is-your-name"
  | "player-row.hide-from-players"
  | "player-row.load-character-sheet-dialog.description"
  | "player-row.load-character-sheet-dialog.load"
  | "player-row.load-character-sheet-dialog.load-and-duplicate"
  | "player-row.load-character-sheet-dialog.title"
  | "player-row.not-played"
  | "player-row.open-character-sheet"
  | "player-row.played"
  | "player-row.remove-player"
  | "player-row.remove-player-confirmation"
  | "player-row.show-to-players"
  | "player-row.swap-character-sheet"
  | "srds-route.description"
  | "srds-route.fate-srds.subtitle"
  | "srds-route.fate-srds.title"
  | "srds-route.resources.title"
  | "srds-route.title"
  | "story-builder-route.meta.description"
  | "story-builder-route.meta.title"
  | "story-dice-route.meta.description"
  | "story-dice-route.meta.title";
