ServerEvents.recipes(event => {

    // --- 1. CYCLIC — броня и оружие (по паттерну) ---
    event.remove({ mod: 'cyclic', output: /crystal/ })
    event.remove({ mod: 'cyclic', output: /emerald/ })

    // --- 2. CYCLIC — отдельные OP предметы ---
    event.remove({ output: 'cyclic:ender_wings' })
    event.remove({ output: 'cyclic:bag_of_holding' })

    // --- 3. CYCLIC — машины (убираем ванильный крафт, заменим рецептом верстака) ---
    // Указываем тип явно — чтобы не зацепить кастомные рецепты SimulationWorkbench
    const cyclicMachines = [
        'cyclic:harvester',
        'cyclic:forester',
        'cyclic:miner',
        'cyclic:breaker',
        'cyclic:placer',
        'cyclic:collector',
        'cyclic:collector_fluid',
        'cyclic:crafter',
        'cyclic:user',
        'cyclic:enchanter',
        'cyclic:disenchanter',
        'cyclic:sprinkler',
        'cyclic:structure',
        'cyclic:dropper',
        'cyclic:fan'
    ]

    /*const cyclicMattocks = [
        'cyclic:mattock',
        'cyclic:mattock_stone',
        'cyclic:mattock_nether'
    ]*/

    cyclicMachines.forEach(id => {
        event.remove({ type: 'minecraft:crafting_shaped', output: id })
        event.remove({ type: 'minecraft:crafting_shapeless', output: id })
    })

    /*cyclicMattocks.forEach(id => {
        event.remove({ type: 'minecraft:crafting_shaped', output: id })
        event.remove({ type: 'minecraft:crafting_shapeless', output: id })
    })*/

    // --- 4. SOLAR FLUX REBORN — убрать ВСЕ рецепты мода ---
    // Solar Flux генерирует рецепты программно, поэтому удаляем весь неймспейс.
    // Наши simulation:workbench_crafting рецепты на панели не затрагиваются —
    // их ID начинается с "simulation:", а не "solarflux:".
    event.remove({ mod: 'solarflux', output: /^solarflux:sp_[1-9]/ })

})
