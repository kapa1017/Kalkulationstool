/**
 * Created by pakanzleiter on 22.11.2017.
 */

export function getTranslation(phrase, lang){
  return translations[phrase][lang];
}

var translations = {
  weiter: {
    de: 'weiter',
    en: 'next'
  },
  exportieren: {
    de: 'Exportieren',
    en: 'Export'
  },
  aktuell: {
    de: 'Aktuell',
    en: 'Acutal'
  },
  durchschnitt: {
    de: 'Durchschnitt',
    en: 'Average'
  },
  gesamt: {
    de: 'Gesamt',
    en: 'Total'
  },
  zurueck: {
    de: 'Zurück',
    en: 'back'
  },
  neuerAuftrag: {
    de: 'Neuen Auftrag kalkulieren',
    en: 'Calculate new order'
  },
  lagerbestaende:{
    de: 'Lagerbestände einsehen',
    en: 'Check warehouse stock'
  },
  periodeEins:{
    de: 'Periode 1',
    en: 'Period 1'
  },
  periodeDrei:{
    de: 'Periode 3',
    en: 'Period 3'
  },
  periodeZwei:{
    de: 'Periode 2',
    en: 'Period 2'
  },
  menge: {
    de: 'Menge',
    en: 'Amount'
  },
  wert: {
    de: 'Wert',
    en: 'Value'
  },
  bezeichnung: {
    de: 'Bezeichnung',
    en: 'KPI'
  },
  prodzeit:{
    de: 'Produktionszeit in min',
    en: 'Productiontime in min'
  },
  liefertreue:{
    de: 'Liefertreue',
    en: 'Delivery reliability'
  },
  leerzeit:{
    de: 'Leerzeiten',
    en: 'Idletime'
  },
  leerzeitkosten:{
    de: 'Kosten Leerzeiten',
    en: 'Idletime costs'
  },
  lagerwert: {
    de: 'Lagerwert',
    en: 'Stock value',
  },
  lagerkosten: {
    de: 'Lagerkosten',
    en: 'Stock costs'
  },
  ergebnisse:{
    de: 'Ergebnisse der letzten Periode einsehen',
    en: 'Results of the last period'
  },
  kpis:{
    de: 'KPI´s einsehen',
    en: 'Check KPI´s'
  },
  produkt: {
    de: 'Produkt',
    en: 'Product'
  },
  sprache: {
    de: 'Sprache',
    en: 'Language'
  },
  workplace: {
    de: 'Arbeitsplatz',
    en: 'Workplace'
  },
  arbeitszeitGes: {
    de: 'Arbeitszeit gesamt',
    en: 'Total working time'
  },
  ruestzeitGes: {
    de: 'Rüstzeit gesamt',
    en: 'Total setup time'
  },
  arbeitszeiten:{
    de: 'Arbeitszeiten bestätigen',
    en: 'Confirm worktimes'
  },
  kapazitaetsbedarfGes:{
    de: 'Kapazitätsbedarf gesamt',
    en: 'Total capacity requirement'
  },
  ueberstunden: {
    de: 'Überstunden in Minuten',
    en: 'Overtime in minutes'
  },
  splitten: {
    de: 'Neuen Auftrag hinzufügen oder bestehenden Auftrag splitten',
    en: 'Add a new order of change existing orders'
  },
  schichtenAnzahl: {
    de: 'Anzahl Schichten',
    en: 'Shifts'
  },
  verbindlicheAuftraege:{
    de: 'Verbindliche Aufträge',
    en: 'Obligatory orders'
  },
  auftraegeAusWarteschlangeFertig: {
    de: 'Aufträge aus der Warteschlange der Fertigprodukte',
    en: 'Orders from the watinglist of the manufactured articles'
  },
  lagerbestandGeplant:{
    de: 'Geplanter Lagerbestand',
    en: 'Intended warehouse stock'
  },
  lagerbestandVorperiode: {
    de: 'Lagerbestand der Vorperiode',
    en: 'Actual warehouse stock'
  },
  auftraegeWarteschlange: {
    de: 'Aufträge in der Warteschlange',
    en: 'Orders in waitinglist'
  },
  auftraegeBearbeitung: {
    de: 'Aufträge in Bearbeitung',
    en: 'Orders in work'
  },
  auftraegeNeuePeriode: {
    de: 'Produktionsaufträge für die nächste Periode',
    en: 'Production Order for the next period'
  },
  element: {
    de: 'Element',
    en: 'Element'
  },
  auftragszahl: {
    de: 'Auftragszahl',
    en: 'Number of orders'
  },
  prio: {
    de: 'Priorität',
    en: 'Priority'
  },
  speichern: {
    de: 'Speichern',
    en: 'Save'
  }
};
