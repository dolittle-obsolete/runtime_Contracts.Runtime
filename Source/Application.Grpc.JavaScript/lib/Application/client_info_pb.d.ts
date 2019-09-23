// package: dolittle.runtime.application
// file: Application/client_info.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../system/guid_pb";

export class ClientInfo extends jspb.Message {
  hasClientid(): boolean;
  clearClientid(): void;
  getClientid(): system_guid_pb.guid | undefined;
  setClientid(value?: system_guid_pb.guid): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getRuntime(): string;
  setRuntime(value: string): void;

  clearServicesbynameList(): void;
  getServicesbynameList(): Array<string>;
  setServicesbynameList(value: Array<string>): void;
  addServicesbyname(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfo): ClientInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfo;
  static deserializeBinaryFromReader(message: ClientInfo, reader: jspb.BinaryReader): ClientInfo;
}

export namespace ClientInfo {
  export type AsObject = {
    clientid?: system_guid_pb.guid.AsObject,
    host: string,
    port: number,
    runtime: string,
    servicesbynameList: Array<string>,
  }
}

