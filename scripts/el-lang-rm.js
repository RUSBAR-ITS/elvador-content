//Remove all preset language

Hooks.once("init", () => {
  delete CONFIG.DND5E.languages.druidic;
  delete CONFIG.DND5E.languages.cant;
  delete CONFIG.DND5E.languages.standard.children.common;
  delete CONFIG.DND5E.languages.standard.children.dwarvish;
  delete CONFIG.DND5E.languages.standard.children.elvish;
  delete CONFIG.DND5E.languages.standard.children.giant;
  delete CONFIG.DND5E.languages.standard.children.gnomish;
  delete CONFIG.DND5E.languages.standard.children.goblin;
  delete CONFIG.DND5E.languages.standard.children.halfling;
  delete CONFIG.DND5E.languages.standard.children.orc;
  delete CONFIG.DND5E.languages.exotic.children.aarakocra;
  delete CONFIG.DND5E.languages.exotic.children.abyssal;
  delete CONFIG.DND5E.languages.exotic.children.celestial;
  delete CONFIG.DND5E.languages.exotic.children.deep;
  delete CONFIG.DND5E.languages.exotic.children.draconic;
  delete CONFIG.DND5E.languages.exotic.children.gith;
  delete CONFIG.DND5E.languages.exotic.children.gnoll;
  delete CONFIG.DND5E.languages.exotic.children.infernal;
  delete CONFIG.DND5E.languages.exotic.children.primordial.children.aquan;
  delete CONFIG.DND5E.languages.exotic.children.primordial.children.auran;
  delete CONFIG.DND5E.languages.exotic.children.primordial.children.ignan;
  delete CONFIG.DND5E.languages.exotic.children.primordial.children.terran;
  delete CONFIG.DND5E.languages.exotic.children.primordial;
  delete CONFIG.DND5E.languages.exotic.children.sylvan;
  delete CONFIG.DND5E.languages.exotic.children.undercommon;
});
