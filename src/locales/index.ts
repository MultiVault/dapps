export default interface ILocale {
    locale: string,
    data: ReactIntl.Locale[],
    messages: {[s: string]: string; }
}