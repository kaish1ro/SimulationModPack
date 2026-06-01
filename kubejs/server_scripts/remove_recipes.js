// Убираем рецепты Scaling Health, сердца и запрещённые рецепты Cyclic
ServerEvents.recipes(event => {
  // Scaling Health — все рецепты
  event.remove({ mod: 'scalinghealth' })

  // Cyclic — сердце (постоянное увеличение HP)
  event.remove({ id: 'cyclic:heart' })

  // Cyclic — руководство (patchouli книга)
  event.remove({ id: 'cyclic:guide_book' })

  // ── Cyclic: запрещённые рецепты ─────────────────────────────────────────

  // Магическая сеть
  event.remove({ output: 'cyclic:magic_net' })

  // Все улучшенные яблоки
  ;[
    'cyclic:apple_bone', 'cyclic:apple_chocolate', 'cyclic:apple_chorus',
    'cyclic:apple_ender', 'cyclic:apple_honey', 'cyclic:apple_iron',
    'cyclic:apple_lapis', 'cyclic:apple_lofty_stature', 'cyclic:apple_prismarine',
    'cyclic:apple_sprout', 'cyclic:apple_sprout_diamond', 'cyclic:apple_sprout_emerald',
    'cyclic:solidifier_apple', 'cyclic:solidifier_apple0',
    'cyclic:solidifier_apple_enchanted',
  ].forEach(id => event.remove({ output: id }))

  // Все посохи / жезлы / скипетры
  ;[
    'cyclic:antimatter_wand', 'cyclic:elevation_wand', 'cyclic:rotation_wand',
    'cyclic:teleport_wand', 'cyclic:wand_hypno', 'cyclic:wand_missile',
    'cyclic:fire_scepter', 'cyclic:ice_scepter', 'cyclic:lightning_scepter',
    'cyclic:offset_scepter', 'cyclic:replace_scepter', 'cyclic:randomize_scepter',
    'cyclic:build_scepter', 'cyclic:laser', 'cyclic:laser_cannon',
    'cyclic:flute_summoning',
  ].forEach(id => event.remove({ output: id }))

  // Все артефакты-чармы
  ;[
    'cyclic:charm_antidote', 'cyclic:charm_antipotion', 'cyclic:charm_attack_speed',
    'cyclic:charm_boostpotion', 'cyclic:charm_creeper', 'cyclic:charm_crit',
    'cyclic:charm_fire', 'cyclic:charm_home', 'cyclic:charm_invisible',
    'cyclic:charm_knockback_resistance', 'cyclic:charm_longfall', 'cyclic:charm_luck',
    'cyclic:charm_magicdefense', 'cyclic:charm_speed', 'cyclic:charm_starvation',
    'cyclic:charm_stealthpotion', 'cyclic:charm_stone', 'cyclic:charm_torch',
    'cyclic:charm_torch_cave', 'cyclic:charm_ultimate', 'cyclic:charm_venom',
    'cyclic:charm_void', 'cyclic:charm_water', 'cyclic:charm_wither',
    'cyclic:charm_world', 'cyclic:charm_xp_blocker', 'cyclic:charm_xp_speed',
  ].forEach(id => event.remove({ output: id }))

  // Эндер-крылья
  event.remove({ output: 'cyclic:charm_wing' })
  event.remove({ output: 'cyclic:chorus_flight' })
  event.remove({ output: 'cyclic:chorus_spectral' })

  // Палки с верстаком (обе)
  event.remove({ output: 'cyclic:crafting_stick' })
  event.remove({ output: 'cyclic:workbench' })

  // Расширитель инвентаря
  event.remove({ output: 'cyclic:inventory_cake' })

  // Эндер-книга
  event.remove({ output: 'cyclic:ender_book' })

  // Огнетушитель
  event.remove({ output: 'cyclic:fire_killer' })

  // Все наковальни Cyclic
  event.remove({ output: 'cyclic:anvil' })
  event.remove({ output: 'cyclic:anvil_magma' })
  event.remove({ output: 'cyclic:anvil_void' })
})
