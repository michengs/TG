'use strict';

// Available strings for additional languages
// If no language is found, the default language (English) will be displayed
module.exports.general = {

	// 
	tw: {
		unknowncommand: "未知输入，输入\"guide help\"",
		helpheader: "输入 \"guide help\" 获取更多使用信息",
		helpbody: [
			["guide, 模组开/关.", "PRMSG"],
			["guide gui,开启模组gui", "PRMSG"],
			["guide voice, 语音开/关", "PRMSG"],
			["guide lNotice, 发送虚拟消息至代理频道开/关", "PRMSG"],
			["guide gNotice, 发送消息至组队频道开/关", "PRMSG"],
			["guide male~female, 设置语音声音为男/女性(可以的话)", "PRMSG"],
			["guide 1~10, 设置语音消息提示速度快慢", "PRMSG"],
			["guide spawnObject, 地面提示开/关", "PRMSG"],
			["guide stream, stream on/off", "PRMSG"],
			["guide dungeons, 列出当前支持副本", "PRMSG"],
			["guide verbose id, 发送提示消息对于特殊副本开/关", "PRMSG"],
			["guide spawnObject id, 设置特殊副本地板提示开/关", "PRMSG"],
			["guide cr, 消息颜色: 红色", "CRMSG"],
			["guide co, 消息颜色: 橙色", "COMSG"],
			["guide cy, 消息颜色: 黄色", "CYMSG"],
			["guide cg, 消息颜色: 绿色", "CGMSG"],
			["guide cdb, 消息颜色: 深蓝色", "CDBMSG"],
			["guide cb, 消息颜色: 蓝色", "CBMSG"],
			["guide cv, 消息颜色: 紫色", "CVMSG"],
			["guide cp, 消息颜色: 粉色", "CPMSG"],
			["guide clp, 消息颜色: 淡粉色", "CLPMSG"],
			["guide clb, 消息颜色: 天蓝色", "CLBMSG"],
			["guide cbl, 消息颜色: 黑色", "CBLMSG"],
			["guide cgr, 消息颜色: 灰色", "CGRMSG"],
			["guide cw, 消息颜色: 白色", "CWMSG"],
		],
		red: "红色",
		green: "绿色",
		settings: "设置",
		spawnObject: "地面标记物",
		speaks: "语音消息（TTS）",
		lNotice: "TERA系统字幕提示改变为代理消息提示",
		gNotice: "组队消息提示",
		stream: "stream mode",
		voice: "语音",
		rate: "语音速度",
		color: "消息颜色",
		dungeons: "副本",
		verbose: "消息提示",
		objects: "地面提示",
		test: "测试",
		module: "TERA-Guide",
		enabled: "开.",
		disabled: "关.",
		male: "男性",
		female: "女性",
		voicetest: "语音测试",
		colorchanged: "颜色已改变",
		dgnotfound: "未找到该副本模组.",
		dgnotspecified: "不是特殊副本.",
		enterdg: "进入副本",
		fordungeon: "该副本",
	},
	ru: {
		unknowncommand: "Невереная команда, введите guide help",
		helpheader: "Введите \"guide help\" для вывода справки",
		helpbody: [
			["guide, вкл./выкл. модуля", "PRMSG"],
			["guide gui, показать графический интерфейс", "PRMSG"],
			["guide voice, вкл./выкл. голосовые сообщения", "PRMSG"],
			["guide lNotice, вкл./выкл. отправки уведомлений в чата вместо экранных", "PRMSG"],
			["guide gNotice, вкл./выкл. отправки сообщений в чат группы", "PRMSG"],
			["guide male~female, выбор пола диктора голосовых сообщений (если доступно)", "PRMSG"],
			["guide 1~10, регулировка скорости чтения голосовых сообщений", "PRMSG"],
			["guide spawnObject, вкл./выкл. спауна маркировочных объектов", "PRMSG"],
			["guide stream, вкл./выкл. режима стрима (скрытие сообщений и объектов)", "PRMSG"],
			["guide dungeons, список всех поддерживаемых данжей и их id", "PRMSG"],
			["guide verbose id, вкл./выкл. всех сообщений для данжа, где id - идентификатор данжа", "PRMSG"],
			["guide spawnObject id, вкл./выкл. спауна объектов для данжа, где id - идентификатор данжа", "PRMSG"],
			["guide cr, установить цвет сообщения: красный", "CRMSG"],
			["guide co, установить цвет сообщения: оранжевый", "COMSG"],
			["guide cy, установить цвет сообщения: желтый", "CYMSG"],
			["guide cg, установить цвет сообщения: зеленый", "CGMSG"],
			["guide cdb, установить цвет сообщения: темно-синий", "CDBMSG"],
			["guide cb, установить цвет сообщения: синий", "CBMSG"],
			["guide cv, установить цвет сообщения: фиолетовый", "CVMSG"],
			["guide cp, установить цвет сообщения: розовый", "CPMSG"],
			["guide clp, установить цвет сообщения: светло-розовый", "CLPMSG"],
			["guide clb, установить цвет сообщения: светло-синий", "CLBMSG"],
			["guide cbl, установить цвет сообщения: черный", "CBLMSG"],
			["guide cgr, установить цвет сообщения: серый", "CGRMSG"],
			["guide cw, установить цвет сообщения: белый", "CWMSG"],
		],
		red: "Красный",
		green: "Зеленый",
		settings: "Настройки",
		spawnObject: "Спаун маркировочных объектов",
		speaks: "Голосовые сообщения",
		lNotice: "Уведомления в чат вместо экранных",
		gNotice: "Сообщения в канал чата группы",
		stream: "Режим стримера (скрытие сообщений и объектов)",
		voice: "Голос (пол)",
		rate: "Скорость речи",
		color: "Выбор цвета",
		dungeons: "Настройки данжей",
		verbose: "Сообщения",
		objects: "Объекты",
		test: "Проверка",
		module: "Модуль TERA-Guide",
		enabled: "Вкл.",
		disabled: "Выкл.",
		male: "Мужской",
		female: "Женский",
		voicetest: "[Проверка скорости чтения сообщений]",
		colorchanged: "Цвет текста сообщений изменен",
		dgnotfound: "Данж с таким id не найден.",
		dgnotspecified: "Не указан id данжа.",
		enterdg: "Вы вошли в данж",
		fordungeon: "для данжа",
	},	
	
	
};