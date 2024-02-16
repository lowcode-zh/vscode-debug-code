import { DebugConfiguration } from "vscode"

export declare type AnyObject = Record<string, any>

export declare interface ProviderConfiguration extends DebugConfiguration {
  name: string,
  type: string,
  request: 'launch',
  program?: string,
  cwd?: string,
  args?: string[],
}

export declare interface RunConfig {
  pattern: string,
  map: AnyObject,
}

export declare interface Provider {
  configuration: ProviderConfiguration;
  extensions?: Array<string>;
  runConfig?: RunConfig;
  moudles?: Array<string>;
}

/**
 * Represents the normalized locales which is used for I18n.
 */
export enum NormalizedLocale {
  EN_US = "en-us",
  ZH_CN = "zh-cn"
}


