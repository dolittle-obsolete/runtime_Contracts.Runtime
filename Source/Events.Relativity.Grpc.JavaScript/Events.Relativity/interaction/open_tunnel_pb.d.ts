// package: dolittle.events.relativity
// file: Events.Relativity/interaction/open_tunnel.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";
import * as Events_Relativity_interaction_artifact_pb from "../../Events.Relativity/interaction/artifact_pb";
import * as Events_Relativity_interaction_tenant_offset_pb from "../../Events.Relativity/interaction/tenant_offset_pb";

export class OpenTunnel extends jspb.Message {
  hasApplication(): boolean;
  clearApplication(): void;
  getApplication(): system_guid_pb.guid | undefined;
  setApplication(value?: system_guid_pb.guid): void;

  hasBoundedcontext(): boolean;
  clearBoundedcontext(): void;
  getBoundedcontext(): system_guid_pb.guid | undefined;
  setBoundedcontext(value?: system_guid_pb.guid): void;

  hasClientid(): boolean;
  clearClientid(): void;
  getClientid(): system_guid_pb.guid | undefined;
  setClientid(value?: system_guid_pb.guid): void;

  clearOffsetsList(): void;
  getOffsetsList(): Array<Events_Relativity_interaction_tenant_offset_pb.TenantOffset>;
  setOffsetsList(value: Array<Events_Relativity_interaction_tenant_offset_pb.TenantOffset>): void;
  addOffsets(value?: Events_Relativity_interaction_tenant_offset_pb.TenantOffset, index?: number): Events_Relativity_interaction_tenant_offset_pb.TenantOffset;

  clearEventsList(): void;
  getEventsList(): Array<Events_Relativity_interaction_artifact_pb.Artifact>;
  setEventsList(value: Array<Events_Relativity_interaction_artifact_pb.Artifact>): void;
  addEvents(value?: Events_Relativity_interaction_artifact_pb.Artifact, index?: number): Events_Relativity_interaction_artifact_pb.Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenTunnel.AsObject;
  static toObject(includeInstance: boolean, msg: OpenTunnel): OpenTunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenTunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenTunnel;
  static deserializeBinaryFromReader(message: OpenTunnel, reader: jspb.BinaryReader): OpenTunnel;
}

export namespace OpenTunnel {
  export type AsObject = {
    application?: system_guid_pb.guid.AsObject,
    boundedcontext?: system_guid_pb.guid.AsObject,
    clientid?: system_guid_pb.guid.AsObject,
    offsetsList: Array<Events_Relativity_interaction_tenant_offset_pb.TenantOffset.AsObject>,
    eventsList: Array<Events_Relativity_interaction_artifact_pb.Artifact.AsObject>,
  }
}

