export interface IMessage {
  type: string;
  code?: number;
  error?: Error;
  message: string;
}
