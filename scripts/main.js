Hooks.on("init", () => {
  // Регистрация настроек для факела (скрытые, config=false)
  game.settings.register("torch-toggle", "torch.name", {
    scope: "world",
    config: false,
    type: String,
    default: "Факел / Torch"
  });
  game.settings.register("torch-toggle", "torch.animationType", {
    scope: "world",
    config: false,
    type: String,
    default: "torch"
  });
  game.settings.register("torch-toggle", "torch.speed", {
    scope: "world",
    config: false,
    type: Number,
    default: 1
  });
  game.settings.register("torch-toggle", "torch.intensity", {
    scope: "world",
    config: false,
    type: Number,
    default: 2
  });
  game.settings.register("torch-toggle", "torch.dim", {
    scope: "world",
    config: false,
    type: Number,
    default: 40
  });
  game.settings.register("torch-toggle", "torch.bright", {
    scope: "world",
    config: false,
    type: Number,
    default: 20
  });
  game.settings.register("torch-toggle", "torch.color", {
    scope: "world",
    config: false,
    type: String,
    default: "#ff9900"
  });
  game.settings.register("torch-toggle", "torch.alpha", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.5
  });
  game.settings.register("torch-toggle", "torch.luminosity", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.5
  });
  game.settings.register("torch-toggle", "torch.attenuation", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.8
  });
  game.settings.register("torch-toggle", "torch.contrast", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.3
  });
  game.settings.register("torch-toggle", "torch.shadows", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.2
  });

  // Регистрация настроек для свечи (скрытые)
  game.settings.register("torch-toggle", "candle.name", {
    scope: "world",
    config: false,
    type: String,
    default: "Свеча / Candle"
  });
  game.settings.register("torch-toggle", "candle.animationType", {
    scope: "world",
    config: false,
    type: String,
    default: "torch"
  });
  game.settings.register("torch-toggle", "candle.speed", {
    scope: "world",
    config: false,
    type: Number,
    default: 1
  });
  game.settings.register("torch-toggle", "candle.intensity", {
    scope: "world",
    config: false,
    type: Number,
    default: 2
  });
  game.settings.register("torch-toggle", "candle.dim", {
    scope: "world",
    config: false,
    type: Number,
    default: 5
  });
  game.settings.register("torch-toggle", "candle.bright", {
    scope: "world",
    config: false,
    type: Number,
    default: 5
  });
  game.settings.register("torch-toggle", "candle.color", {
    scope: "world",
    config: false,
    type: String,
    default: "#ff9900"
  });
  game.settings.register("torch-toggle", "candle.alpha", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.5
  });
  game.settings.register("torch-toggle", "candle.luminosity", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.5
  });
  game.settings.register("torch-toggle", "candle.attenuation", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.8
  });
  game.settings.register("torch-toggle", "candle.contrast", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.3
  });
  game.settings.register("torch-toggle", "candle.shadows", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.2
  });

  // Регистрация настроек для фонаря (скрытые)
  game.settings.register("torch-toggle", "lantern.name", {
    scope: "world",
    config: false,
    type: String,
    default: "Фонарь, закрытый / Lantern, Hooded"
  });
  game.settings.register("torch-toggle", "lantern.animationType", {
    scope: "world",
    config: false,
    type: String,
    default: "torch"
  });
  game.settings.register("torch-toggle", "lantern.speed", {
    scope: "world",
    config: false,
    type: Number,
    default: 1
  });
  game.settings.register("torch-toggle", "lantern.intensity", {
    scope: "world",
    config: false,
    type: Number,
    default: 2
  });
  game.settings.register("torch-toggle", "lantern.dim", {
    scope: "world",
    config: false,
    type: Number,
    default: 60
  });
  game.settings.register("torch-toggle", "lantern.bright", {
    scope: "world",
    config: false,
    type: Number,
    default: 30
  });
  game.settings.register("torch-toggle", "lantern.color", {
    scope: "world",
    config: false,
    type: String,
    default: "#ff9900"
  });
  game.settings.register("torch-toggle", "lantern.alpha", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.5
  });
  game.settings.register("torch-toggle", "lantern.luminosity", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.5
  });
  game.settings.register("torch-toggle", "lantern.attenuation", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.8
  });
  game.settings.register("torch-toggle", "lantern.contrast", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.3
  });
  game.settings.register("torch-toggle", "lantern.shadows", {
    scope: "world",
    config: false,
    type: Number,
    default: 0.2
  });

  // Регистрация меню для факела
  game.settings.registerMenu("torch-toggle", "torchSettings", {
    name: "Настроить факел",
    label: "Настройки факела",
    hint: "Открыть форму для настройки параметров факела.",
    icon: "fas fa-cog",
    type: TorchSettingsForm,
    restricted: true  // Только GM
  });

  // Регистрация меню для свечи
  game.settings.registerMenu("torch-toggle", "candleSettings", {
    name: "Настроить свечу",
    label: "Настройки свечи",
    hint: "Открыть форму для настройки параметров свечи.",
    icon: "fas fa-cog",
    type: CandleSettingsForm,
    restricted: true
  });

  // Регистрация меню для фонаря
  game.settings.registerMenu("torch-toggle", "lanternSettings", {
    name: "Настроить фонарь",
    label: "Настройки фонаря",
    hint: "Открыть форму для настройки параметров фонаря.",
    icon: "fas fa-cog",
    type: LanternSettingsForm,
    restricted: true
  });
});

// Класс для формы настроек факела
class TorchSettingsForm extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Настройки факела",
      id: "torch-settings-form",
      template: "modules/torch-toggle/templates/torch-settings.hbs",
      width: 500,
      submitOnChange: true,
      closeOnSubmit: false,
      classes: ["sheet", "torch-settings-sheet"]
    });
  }

  getData() {
    return {
      name: game.settings.get("torch-toggle", "torch.name"),
      animationType: game.settings.get("torch-toggle", "torch.animationType"),
      speed: game.settings.get("torch-toggle", "torch.speed"),
      intensity: game.settings.get("torch-toggle", "torch.intensity"),
      dim: game.settings.get("torch-toggle", "torch.dim"),
      bright: game.settings.get("torch-toggle", "torch.bright"),
      color: game.settings.get("torch-toggle", "torch.color"),
      alpha: game.settings.get("torch-toggle", "torch.alpha"),
      luminosity: game.settings.get("torch-toggle", "torch.luminosity"),
      attenuation: game.settings.get("torch-toggle", "torch.attenuation"),
      contrast: game.settings.get("torch-toggle", "torch.contrast"),
      shadows: game.settings.get("torch-toggle", "torch.shadows"),
      animationChoices: Object.fromEntries(
        Object.entries(CONFIG.Canvas.lightAnimations).map(([key, value]) => [key, game.i18n.localize(value.label)])
      )
    };
  }

  async _updateObject(event, formData) {
    await game.settings.set("torch-toggle", "torch.name", formData.name);
    await game.settings.set("torch-toggle", "torch.animationType", formData.animationType);
    await game.settings.set("torch-toggle", "torch.speed", Number(formData.speed));
    await game.settings.set("torch-toggle", "torch.intensity", Number(formData.intensity));
    await game.settings.set("torch-toggle", "torch.dim", Number(formData.dim));
    await game.settings.set("torch-toggle", "torch.bright", Number(formData.bright));
    await game.settings.set("torch-toggle", "torch.color", formData.color);
    await game.settings.set("torch-toggle", "torch.alpha", Number(formData.alpha));
    await game.settings.set("torch-toggle", "torch.luminosity", Number(formData.luminosity));
    await game.settings.set("torch-toggle", "torch.attenuation", Number(formData.attenuation));
    await game.settings.set("torch-toggle", "torch.contrast", Number(formData.contrast));
    await game.settings.set("torch-toggle", "torch.shadows", Number(formData.shadows));
  }
}

// Класс для формы настроек свечи
class CandleSettingsForm extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Настройки свечи",
      id: "candle-settings-form",
      template: "modules/torch-toggle/templates/candle-settings.hbs",
      width: 500,
      submitOnChange: true,
      closeOnSubmit: false,
      classes: ["sheet", "candle-settings-sheet"]
    });
  }

  getData() {
    return {
      name: game.settings.get("torch-toggle", "candle.name"),
      animationType: game.settings.get("torch-toggle", "candle.animationType"),
      speed: game.settings.get("torch-toggle", "candle.speed"),
      intensity: game.settings.get("torch-toggle", "candle.intensity"),
      dim: game.settings.get("torch-toggle", "candle.dim"),
      bright: game.settings.get("torch-toggle", "candle.bright"),
      color: game.settings.get("torch-toggle", "candle.color"),
      alpha: game.settings.get("torch-toggle", "candle.alpha"),
      luminosity: game.settings.get("torch-toggle", "candle.luminosity"),
      attenuation: game.settings.get("torch-toggle", "candle.attenuation"),
      contrast: game.settings.get("torch-toggle", "candle.contrast"),
      shadows: game.settings.get("torch-toggle", "candle.shadows"),
      animationChoices: Object.fromEntries(
        Object.entries(CONFIG.Canvas.lightAnimations).map(([key, value]) => [key, game.i18n.localize(value.label)])
      )
    };
  }

  async _updateObject(event, formData) {
    await game.settings.set("torch-toggle", "candle.name", formData.name);
    await game.settings.set("torch-toggle", "candle.animationType", formData.animationType);
    await game.settings.set("torch-toggle", "candle.speed", Number(formData.speed));
    await game.settings.set("torch-toggle", "candle.intensity", Number(formData.intensity));
    await game.settings.set("torch-toggle", "candle.dim", Number(formData.dim));
    await game.settings.set("torch-toggle", "candle.bright", Number(formData.bright));
    await game.settings.set("torch-toggle", "candle.color", formData.color);
    await game.settings.set("torch-toggle", "candle.alpha", Number(formData.alpha));
    await game.settings.set("torch-toggle", "candle.luminosity", Number(formData.luminosity));
    await game.settings.set("torch-toggle", "candle.attenuation", Number(formData.attenuation));
    await game.settings.set("torch-toggle", "candle.contrast", Number(formData.contrast));
    await game.settings.set("torch-toggle", "candle.shadows", Number(formData.shadows));
  }
}

// Класс для формы настроек фонаря
class LanternSettingsForm extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: "Настройки фонаря",
      id: "lantern-settings-form",
      template: "modules/torch-toggle/templates/lantern-settings.hbs",
      width: 500,
      submitOnChange: true,
      closeOnSubmit: false,
      classes: ["sheet", "lantern-settings-sheet"]
    });
  }

  getData() {
    return {
      name: game.settings.get("torch-toggle", "lantern.name"),
      animationType: game.settings.get("torch-toggle", "lantern.animationType"),
      speed: game.settings.get("torch-toggle", "lantern.speed"),
      intensity: game.settings.get("torch-toggle", "lantern.intensity"),
      dim: game.settings.get("torch-toggle", "lantern.dim"),
      bright: game.settings.get("torch-toggle", "lantern.bright"),
      color: game.settings.get("torch-toggle", "lantern.color"),
      alpha: game.settings.get("torch-toggle", "lantern.alpha"),
      luminosity: game.settings.get("torch-toggle", "lantern.luminosity"),
      attenuation: game.settings.get("torch-toggle", "lantern.attenuation"),
      contrast: game.settings.get("torch-toggle", "lantern.contrast"),
      shadows: game.settings.get("torch-toggle", "lantern.shadows"),
      animationChoices: Object.fromEntries(
        Object.entries(CONFIG.Canvas.lightAnimations).map(([key, value]) => [key, game.i18n.localize(value.label)])
      )
    };
  }

  async _updateObject(event, formData) {
    await game.settings.set("torch-toggle", "lantern.name", formData.name);
    await game.settings.set("torch-toggle", "lantern.animationType", formData.animationType);
    await game.settings.set("torch-toggle", "lantern.speed", Number(formData.speed));
    await game.settings.set("torch-toggle", "lantern.intensity", Number(formData.intensity));
    await game.settings.set("torch-toggle", "lantern.dim", Number(formData.dim));
    await game.settings.set("torch-toggle", "lantern.bright", Number(formData.bright));
    await game.settings.set("torch-toggle", "lantern.color", formData.color);
    await game.settings.set("torch-toggle", "lantern.alpha", Number(formData.alpha));
    await game.settings.set("torch-toggle", "lantern.luminosity", Number(formData.luminosity));
    await game.settings.set("torch-toggle", "lantern.attenuation", Number(formData.attenuation));
    await game.settings.set("torch-toggle", "lantern.contrast", Number(formData.contrast));
    await game.settings.set("torch-toggle", "lantern.shadows", Number(formData.shadows));
  }
}

Hooks.on("updateItem", async (item, changes, options, userId) => {
  // Проверяем, что это итем актора и изменился equipped
  if (!item.parent || item.parent.documentName !== "Actor") return;
  if (changes.system?.equipped === undefined) return;

  const actor = item.parent;
  const equipped = changes.system.equipped;

  // Получаем настройки
  const torch = {
    name: game.settings.get("torch-toggle", "torch.name"),
    animationType: game.settings.get("torch-toggle", "torch.animationType"),
    speed: game.settings.get("torch-toggle", "torch.speed"),
    intensity: game.settings.get("torch-toggle", "torch.intensity"),
    dim: game.settings.get("torch-toggle", "torch.dim"),
    bright: game.settings.get("torch-toggle", "torch.bright"),
    color: game.settings.get("torch-toggle", "torch.color"),
    alpha: game.settings.get("torch-toggle", "torch.alpha"),
    luminosity: game.settings.get("torch-toggle", "torch.luminosity"),
    attenuation: game.settings.get("torch-toggle", "torch.attenuation"),
    contrast: game.settings.get("torch-toggle", "torch.contrast"),
    shadows: game.settings.get("torch-toggle", "torch.shadows")
  };
  const candle = {
    name: game.settings.get("torch-toggle", "candle.name"),
    animationType: game.settings.get("torch-toggle", "candle.animationType"),
    speed: game.settings.get("torch-toggle", "candle.speed"),
    intensity: game.settings.get("torch-toggle", "candle.intensity"),
    dim: game.settings.get("torch-toggle", "candle.dim"),
    bright: game.settings.get("torch-toggle", "candle.bright"),
    color: game.settings.get("torch-toggle", "candle.color"),
    alpha: game.settings.get("torch-toggle", "candle.alpha"),
    luminosity: game.settings.get("torch-toggle", "candle.luminosity"),
    attenuation: game.settings.get("torch-toggle", "candle.attenuation"),
    contrast: game.settings.get("torch-toggle", "candle.contrast"),
    shadows: game.settings.get("torch-toggle", "candle.shadows")
  };
  const lantern = {
    name: game.settings.get("torch-toggle", "lantern.name"),
    animationType: game.settings.get("torch-toggle", "lantern.animationType"),
    speed: game.settings.get("torch-toggle", "lantern.speed"),
    intensity: game.settings.get("torch-toggle", "lantern.intensity"),
    dim: game.settings.get("torch-toggle", "lantern.dim"),
    bright: game.settings.get("torch-toggle", "lantern.bright"),
    color: game.settings.get("torch-toggle", "lantern.color"),
    alpha: game.settings.get("torch-toggle", "lantern.alpha"),
    luminosity: game.settings.get("torch-toggle", "lantern.luminosity"),
    attenuation: game.settings.get("torch-toggle", "lantern.attenuation"),
    contrast: game.settings.get("torch-toggle", "lantern.contrast"),
    shadows: game.settings.get("torch-toggle", "lantern.shadows")
  };

  // Определяем, это факел, свеча или фонарь
  let itemType;
  if (item.name === torch.name) itemType = torch;
  else if (item.name === candle.name) itemType = candle;
  else if (item.name === lantern.name) itemType = lantern;
  else return;

  // Находим активные токены
  const tokens = actor.getActiveTokens();
  if (!tokens.length) {
    ui.notifications.warn("Нет активного токена для этого персонажа на сцене.");
    return;
  }

  if (equipped) {
    // Расход (quantity или use())
    let currentResource;
    if (itemType === lantern) {
      currentResource = item.system.uses?.value || 0;
      if (currentResource <= 0) {
        ui.notifications.warn(`Нет доступных ${item.name}!`);
        await item.update({ "system.equipped": false });
        return;
      }
      await item.use({ configureDialog: false });
    } else {
      currentResource = item.system.quantity || 0;
      if (currentResource <= 0) {
        ui.notifications.warn(`Нет доступных ${item.name}!`);
        await item.update({ "system.equipped": false });
        return;
      }
      await item.update({ "system.quantity": currentResource - 1 });
    }

    // Light config из настроек
    const lightConfig = {
      angle: 360,
      color: itemType.color,
      alpha: itemType.alpha,
      animation: {
        type: itemType.animationType,
        speed: itemType.speed,
        intensity: itemType.intensity
      },
      luminosity: itemType.luminosity,
      attenuation: itemType.attenuation,
      contrast: itemType.contrast,
      shadows: itemType.shadows,
      dim: itemType.dim,
      bright: itemType.bright
    };

    // Обновляем токены
    for (const token of tokens) {
      await token.document.update({ light: lightConfig });
      token.updateLightAndVisionSources();
      token.refresh();
    }
  } else {
    // Сброс света
    const defaultLight = {
      dim: 0,
      bright: 0,
      angle: 360,
      color: "#ffffff",
      alpha: 0.5,
      animation: null,
      luminosity: 0.5,
      attenuation: 0,
      contrast: 0,
      shadows: 0
    };

    for (const token of tokens) {
      await token.document.update({ light: defaultLight });
      token.updateLightAndVisionSources();
      token.refresh();
    }
  }
});