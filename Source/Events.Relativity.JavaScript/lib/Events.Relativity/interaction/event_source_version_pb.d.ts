// package: dolittle.events.relativity
// file: Events.Relativity/interaction/event_source_version.proto

import * as jspb from "google-protobuf";

export class EventSourceVersion extends jspb.Message {
  getCommit(): number;
  setCommit(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSourceVersion.AsObject;
  static toObject(includeInstance: boolean, msg: EventSourceVersion): EventSourceVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSourceVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSourceVersion;
  static deserializeBinaryFromReader(message: EventSourceVersion, reader: jspb.BinaryReader): EventSourceVersion;
}

export namespace EventSourceVersion {
  export type AsObject = {
    commit: number,
    sequence: number,
  }
}

