// package: dolittle.events.relativity
// file: Events.Relativity/interaction/tenant_offset.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";

export class TenantOffset extends jspb.Message {
  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): system_guid_pb.guid | undefined;
  setTenant(value?: system_guid_pb.guid): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantOffset.AsObject;
  static toObject(includeInstance: boolean, msg: TenantOffset): TenantOffset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TenantOffset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantOffset;
  static deserializeBinaryFromReader(message: TenantOffset, reader: jspb.BinaryReader): TenantOffset;
}

export namespace TenantOffset {
  export type AsObject = {
    tenant?: system_guid_pb.guid.AsObject,
    offset: number,
  }
}

