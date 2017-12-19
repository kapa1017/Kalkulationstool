/**
 * Created by pakanzleiter on 22.11.2017.
 */

export function getTranslation(phrase, lang){
  return translations[phrase][lang];
}

var translations = {
  andereDatei: {
    de: 'Andere Datei für die Kalkulation wählen',
    en: 'Select another element for calculation'
  },
  weiter: {
    de: 'weiter',
    en: 'next'
  },
  exportieren: {
    de: 'Exportieren',
    en: 'Export'
  },
  kaufteil: {
    de: 'Kaufteil',
    en: 'item'
  },
  bestellung: {
    de: 'Bestellung',
    en: 'Order'
  },
  lieferfrist: {
    de: 'Lieferfrist',
    en: 'Delivery Time'
  },
  abweichung: {
    de: 'Abweichung',
    en: 'Discrepancy'
  },
  diskontmenge: {
    de: 'Diskont',
    en: 'Discount'
  },
  anfangsbestandPeriode: {
    de: 'Bestand aktuell',
    en: 'Warehouse Stock'
  },
  typ: {
    de: 'Typ',
    en: 'Type'
  },
  verwendung: {
    de: 'Verwendung',
    en: 'Usage'
  },
  bestandPlan: {
    de: 'Geplanter Bestand nach Wareneinngängen',
    en: 'Scheduled Stock after delivery'
  },
  bruttoBedarf: {
    de: 'Bruttobedarf nach Produktionsprogramm',
    en: 'Requirement for production plan'
  },
  aktuell: {
    de: 'Aktuell',
    en: 'Acutal'
  },
  header1:{
    de: 'Geben Sie die Aufträge für P1 ein oder passen Sie die Lagerwerte an',
    en: 'Enter the orders for P1 or change the stock values'
  },
  header2:{
    de: 'Geben Sie die Aufträge für P2 ein oder passen Sie die Lagerwerte an',
    en: 'Enter the orders for P2 or change the stock values'
  },
  header3:{
    de: 'Geben Sie die Aufträge für P3 ein oder passen Sie die Lagerwerte an',
    en: 'Enter the orders for P3 or change the stock values'
  },
  header4:{
    de: 'Splitten Sie Aufträge oder nehmen Sie eine Reihenfolgeplanung vor',
    en: 'Split the orders or change the priority'
  },
  header5: {
    de: 'Kontrollieren Sie die Arbeitszeiten und passen sie ggfs. die Schichten an',
    en: 'Check the worktimes and change the shifts'
  },
  header6: {
    de: 'Geben Sie die Absatzprognosen für die Bestellplanung der Kaufteile an',
    en: 'Enter the order forecast for calculating the orders of the parts'
  },
  header7: {
    de: 'Passen Sie bei Bedarf die Bestellungen der Kaufteile an',
    en: ' Change the orders'
  },
  header8: {
    de: 'Lagerbestände',
    en: 'Stock value'
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
