// package: dolittle.events.relativity
// file: Events.Relativity/interaction/claim.proto

import * as jspb from "google-protobuf";

export class Claim extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getValuetype(): string;
  setValuetype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Claim.AsObject;
  static toObject(includeInstance: boolean, msg: Claim): Claim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Claim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Claim;
  static deserializeBinaryFromReader(message: Claim, reader: jspb.BinaryReader): Claim;
}

export namespace Claim {
  export type AsObject = {
    name: string,
    value: string,
    valuetype: string,
  }
}

