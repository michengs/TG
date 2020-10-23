﻿// Velik's Sanctuary
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_RU: "ДКБ",
						message_TW: "注视 > 闪电 > 炸弹"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_RU: "ДБК",
						message_TW: "注视 > 炸弹 > 闪电"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_RU: "КБД",
						message_TW: "闪电 > 炸弹 > 注视"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_RU: "КДБ",
						message_TW: "闪电 > 注视 > 炸弹"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_RU: "БДК",
						message_TW: "炸弹 > 注视 > 闪电"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_RU: "БКД",
						message_TW: "炸弹 > 闪电 > 注视"
					});
				}
				break;
		}
	}

	function thirdboss_start_event() {
		thirdboss_fifty = false;
	}

	function thirdboss_fifty_event() {
		thirdboss_fifty = true;
	}

	return {
		// 1 BOSS
		"nd-781-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-781-1000-2401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_TW: "右" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-1000-2402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_TW: "左" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-1000-2304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_RU: "Взлет", message_TW: "飞" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-2303-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_TW: "转圈" }],
		"s-781-1000-2113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_RU: "Передняя | AOE", message_TW: "前方 + AOE" }],
		"s-781-1000-2308-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу", message_TW: "出" }],
		"s-781-1000-2309-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь", message_TW: "进" }],
		"s-781-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_TW: "右" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_TW: "左" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_RU: "Взлет", message_TW: "飞" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка", message_TW: "转圈" }],
		"s-781-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_RU: "Передняя | AOE", message_TW: "前方 + AOE" }],
		"s-781-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу", message_TW: "出" }],
		"s-781-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь", message_TW: "进" }],
		//"qb-781-1000-78102": [{ type: "text", sub_type: "message", message: "Run away", message_RU: "Уходи!" }],
		//"qb-781-1000-78103": [{ type: "text", sub_type: "message", message: "点名炸石柱", message_RU: "点名炸石柱" }], // круг на одного
		//"qb-781-1000-78106": [{ type: "text", sub_type: "message", message: "集体炸石柱", message_RU: "集体炸石柱" }], // круги на всех

		// 2 BOSS
		"nd-781-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		//"s-781-2000-1503-0": [{ type: "text", sub_type: "message", message: "坦快跑远", message_RU: "坦快跑远" }], // наткнул
		"s-781-2000-1106-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", message_TW: "后方" }],
		"s-781-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", message_TW: "前方" }],
		"s-781-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая", message_TW: "360攻击" }],
		"s-781-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_TW: "点名" }],
		//"s-781-2000-1121-0": [{ type: "text", sub_type: "message", message: "Summon Mobs", message_RU: "Призыв мобов" }],
		"s-781-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_RU: "Идентификация", message_TW: "鉴定" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-781-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_TW: "左" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_TW: "右" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		//"s-781-2000-2503-0": [{ type: "text", sub_type: "message", message: "坦快跑远", message_RU: "坦快跑远" }], // дурион выбрал цель
		"s-781-2000-2106-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний", message_TW: "后方" }],
		"s-781-2000-2108-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний", message_TW: "前方" }],
		"s-781-2000-2111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая", message_TW: "360攻击" }],
		//"s-781-2000-2121-0": [{ type: "text", sub_type: "message", message: "Summon Mobs", message_RU: "Призыв мобов" }],
		"s-781-2000-2501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_RU: "Идентификация", message_TW: "鉴定" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-781-2000-2130-0": [{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево", message_TW: "左" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-2000-2131-0": [{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо", message_TW: "右" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		//"s-781-2000-4000-0": [{ type: "text", sub_type: "alert", message: "鉴定！！！！", message_RU: "Дискотека！" }],
		//"dm-0-0-9781022": [{ type: "text", sub_type: "alert", message: "鉴定", message_RU: "鉴定" }],
		//"dm-0-0-9781023": [{ type: "text", sub_type: "message", message: "全场鉴定", message_RU: "全场鉴定" }],
		"dm-0-0-9781046": [{ type: "text", sub_type: "message", message: "First: (Debuffs) Closest", message_RU: "[ДКБ] Первая: дебафф (ближние)", message_TW: "注视(最近)" }], // Thank you... for this release...
		"dm-0-0-9781047": [{ type: "text", sub_type: "message", message: "First: (Circles) Spread", message_RU: "[КБД] Первая: круги (отдельно)", message_TW: "闪电(远离)" }], // Beware the... red lightning...
		"dm-0-0-9781048": [{ type: "text", sub_type: "message", message: "First: (Bombs) Gather + Cleanse", message_RU: "[БДК] Первая: бомбы (вместе + клинс)", message_TW: "炸弹集中(补师解)" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-781-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-781-3000-99": [{ type: "func", func: thirdboss_start_event }],
		"h-781-3000-50": [{ type: "func", func: thirdboss_fifty_event }],
		"dm-0-0-9781043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9781044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9781045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-781-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_RU: "Дебафф (ближние)", message_TW: "注视(最近)" }],
		"s-781-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_RU: "Дебафф (дальние)", message_TW: "注视(最远)" }],
		"s-781-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_RU: "Бомбы (вместе!) + клинс", message_TW: "炸弹集中(补师解)" }],
		"s-781-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_RU: "Бомбы (вместе!) + без клинса", message_TW: "炸弹集中(不解)" }],
		"s-781-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_RU: "Круги (отдельно!)", message_TW: "闪电(分散)" }],
		"s-781-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_RU: "Круги (вместе!)", message_TW: "闪电(集中)" }],
		"s-781-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти", message_TW: "抓" }],
		"s-781-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_RU: "Назад + Вперед", message_TW: "后方 + 前方" }],
		"s-781-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_TW: "点名" }],
		"s-781-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_RU: "Стан", message_TW: "眩晕" }],
		"s-781-3000-2151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_RU: "Стан", message_TW: "眩晕" }],
		"s-781-3000-2113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт", message_TW: "点名" }],
		"s-781-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад", message_TW: "晕 + 后方" }],
		"s-781-3000-2152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад", message_TW: "晕 + 后方" }],
		"s-781-3000-2138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу", message_TW: "出" }],
		"s-781-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь", message_TW: "进" }],
		"s-781-3000-1240-0": [{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики", message_TW: "甜甜圈" }, { type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }],
		"s-781-3000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!", message_TW: "补师解" }],
		"s-781-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Слип!!", message_TW: "伊莎摇篮曲" }]
	};
};