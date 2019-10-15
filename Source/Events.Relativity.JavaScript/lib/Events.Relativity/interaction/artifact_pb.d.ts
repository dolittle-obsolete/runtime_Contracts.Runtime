// package: dolittle.events.relativity
// file: Events.Relativity/interaction/artifact.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";

export class Artifact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): system_guid_pb.guid | undefined;
  setId(value?: system_guid_pb.guid): void;

  getGeneration(): number;
  setGeneration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    id?: system_guid_pb.guid.AsObject,
    generation: number,
  }
}

