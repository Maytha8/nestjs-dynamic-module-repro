export interface AModuleConfig {
  greeting: string | ((name: string) => string);
}
