// Гейт Apotheosis: мод должен открываться в середине прохождения — через
// кузнеца-выжившего в измерении Шахты (сюжетная разблокировка, пока не реализована).
// До этого вся инфраструктура Apotheosis недоступна в крафте: полки зачарования
// (hellshelf/seashelf/deepshelf и пр.), инфузия, библиотека зачарований, томы,
// столы salvage/reforge/gem cutting/augmenting, сигилы, модификаторы спавнеров,
// зелейные чармы, фletching-стрелы.
//
// На ванильном этапе прокачку сверх ванили покрывает механика Illager Invasion
// (+1 уровень зачарования) — этого достаточно до Незера.
//
// Дропы adventure-модуля (аффиксы/гемы) заглушены отдельно в config/apotheosis/
// adventure.cfg (Random Affix Chance=0, Gem Drop Chance=0 и т.д.).
// Бан зачарований Cyclic — нативно в config/cyclic.toml, от Apotheosis не зависит.

ServerEvents.recipes(event => {
    event.remove({ mod: 'apotheosis' })
    console.info('[apotheosis_gate] Рецепты Apotheosis удалены — мод откроется через кузнеца в Шахтах')
})
