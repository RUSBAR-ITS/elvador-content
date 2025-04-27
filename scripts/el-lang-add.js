Hooks.once("init", () => {
  CONFIG.DND5E.languages.el_druidic = "Друидический";
  CONFIG.DND5E.languages.el_cant = "Воровской жаргон";
  CONFIG.DND5E.languages.standard.children.el_east = "Восточный";
  CONFIG.DND5E.languages.standard.children.el_gnomish = "Гномий";
  CONFIG.DND5E.languages.standard.children.el_dwarvish = "Дварфский";
  CONFIG.DND5E.languages.standard.children.el_preimperial = {
    label: "Доимперский",
      children: {
        el_p_east: "Восточный диалект",
        el_p_west: "Западный диалект"
    }
  };
  CONFIG.DND5E.languages.standard.children.el_west = "Западный";
  CONFIG.DND5E.languages.standard.children.el_orc = "Орочий";
  CONFIG.DND5E.languages.standard.children.el_oldimperial = {
    label: "Староимперский",
      children: {
        el_o_east: "Восточный диалект",
        el_o_west: "Западный диалект"
    }
  };
  CONFIG.DND5E.languages.standard.children.el_hobbit = "Хоббитский";
  CONFIG.DND5E.languages.standard.children.el_elvish = "Эльфийский";
  CONFIG.DND5E.languages.exotic.children.el_asgard = "Азгардский";
  CONFIG.DND5E.languages.exotic.children.el_island = "Архипелага";
  CONFIG.DND5E.languages.exotic.children.el_abyss = "Бездны";
  CONFIG.DND5E.languages.exotic.children.el_goblin = "Гоблинский";
  CONFIG.DND5E.languages.exotic.children.el_deep = "Глубинная речь";
  CONFIG.DND5E.languages.exotic.children.el_dragon = "Драконий";
  CONFIG.DND5E.languages.exotic.children.el_drowish = "Дроу";
  CONFIG.DND5E.languages.exotic.children.el_celestial = "Небесный";
  CONFIG.DND5E.languages.exotic.children.el_infernal = "Инфернальный";
  CONFIG.DND5E.languages.exotic.children.el_sylvan = "Сильван";
});
