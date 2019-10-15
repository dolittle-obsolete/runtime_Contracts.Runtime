// package: dolittle.events.relativity
// file: Events.Relativity/interaction/property_bag.proto

import * as jspb from "google-protobuf";
import * as system_value_pb from "../../system/value_pb";

export class PropertyBag extends jspb.Message {
  getValuesMap(): jspb.Map<string, system_value_pb.Value>;
  clearValuesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyBag.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyBag): PropertyBag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyBag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyBag;
  static deserializeBinaryFromReader(message: PropertyBag, reader: jspb.BinaryReader): PropertyBag;
}

export namespace PropertyBag {
  export type AsObject = {
    valuesMap: Array<[string, system_value_pb.Value.AsObject]>,
  }
}

