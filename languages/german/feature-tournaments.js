﻿exports.translations = {
	commands: {
		/*
		* Tour Commands
		*/
		tourhelp: {'h': 'tour (Format), (Sekunden bis zum Start oder off), (Minuten Inaktivität für automatische Disqualifikation oder off), (maximale Anzahl an Teilnemern oder off), (elimination oder roundrobin). Alle Argumente sind optional.'},
		tourend: {'err': 'Es gibt kein Turnier in diesem Raum', 'err2': 'Fehler: Turnier ist bereits gestartet'},
		tournament: {
			'e1': 'benötigt Moderator-Rang (@) oder höher, um Turniere zu erstellen',
			'e2': 'Es findet bereits ein Turnier in diesem Raum statt',
			'e31': 'Format',
			'e32': 'ist nicht gültig für Turniere',
			'e4': 'Zeit bis zum Start ist keine gültige Zeit',
			'e5': 'Zeit bis zum Autodq ist keine gültige Zeit',
			'e6': 'Maximale Anzahl an Teilnehmern ist nicht gültig',
			'e7': 'Turniertyp ist ungültig. Gültige Typen sind: elimination, roundrobin',
			'notstarted': 'Fehler: Das Turnier ist nicht gestartet, wahrscheinlich weil ich nicht die Berechtigung habe, ein Turnier zu erstellen oder der Befehl wurde geändert.',
			'param': 'Parameter',
			'paramhelp': 'nicht gefunden, gelten parameter'
		},
		leaderboard: {
			'usage': 'Usage',
			'invuser': 'Ungültiger Benutzername',
			'rank': 'Rangfolge der',
			'in': 'im',
			'points': 'Punkte',
			'w': 'Gewinner',
			'f': 'Finalist',
			'sf': 'Semifinalist',
			'times': 'mal',
			'total': 'Gesamt',
			'tours': 'touren gespielt',
			'bwon': 'schlachten gewonnen',
			'not': 'Listen ist nicht für die Raum aktiviert',
			'empty': 'Es sind nicht Turniere registriert noch für Raum',
			'table': 'Leadertisch',
			'err': 'Fehler beim Hochladen Bestenlisten Tabelle Hastebin',
			'use': '',
			'confirm': 'verwenden, um das Leaderboard Daten-Reset für Raum bestätigen',
			'invhash': 'Ungültige hashcode',
			'data': 'Leaderdaten für Raum',
			'del': 'wurde zurückgesetzt',
			'unknown': 'Unbekannte option'
		}
	}
};
