// package: dolittle.events.relativity
// file: Events.Relativity/interaction/event_metadata.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";
import * as Events_Relativity_interaction_artifact_pb from "../../Events.Relativity/interaction/artifact_pb";
import * as Events_Relativity_interaction_versioned_event_source_pb from "../../Events.Relativity/interaction/versioned_event_source_pb";
import * as Events_Relativity_interaction_original_context_pb from "../../Events.Relativity/interaction/original_context_pb";

export class EventMetadata extends jspb.Message {
  hasEventid(): boolean;
  clearEventid(): void;
  getEventid(): system_guid_pb.guid | undefined;
  setEventid(value?: system_guid_pb.guid): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Events_Relativity_interaction_versioned_event_source_pb.VersionedEventSource | undefined;
  setSource(value?: Events_Relativity_interaction_versioned_event_source_pb.VersionedEventSource): void;

  hasCorrelationid(): boolean;
  clearCorrelationid(): void;
  getCorrelationid(): system_guid_pb.guid | undefined;
  setCorrelationid(value?: system_guid_pb.guid): void;

  hasArtifact(): boolean;
  clearArtifact(): void;
  getArtifact(): Events_Relativity_interaction_artifact_pb.Artifact | undefined;
  setArtifact(value?: Events_Relativity_interaction_artifact_pb.Artifact): void;

  getOccurred(): number;
  setOccurred(value: number): void;

  hasOriginalcontext(): boolean;
  clearOriginalcontext(): void;
  getOriginalcontext(): Events_Relativity_interaction_original_context_pb.OriginalContext | undefined;
  setOriginalcontext(value?: Events_Relativity_interaction_original_context_pb.OriginalContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventMetadata): EventMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMetadata;
  static deserializeBinaryFromReader(message: EventMetadata, reader: jspb.BinaryReader): EventMetadata;
}

export namespace EventMetadata {
  export type AsObject = {
    eventid?: system_guid_pb.guid.AsObject,
    source?: Events_Relativity_interaction_versioned_event_source_pb.VersionedEventSource.AsObject,
    correlationid?: system_guid_pb.guid.AsObject,
    artifact?: Events_Relativity_interaction_artifact_pb.Artifact.AsObject,
    occurred: number,
    originalcontext?: Events_Relativity_interaction_original_context_pb.OriginalContext.AsObject,
  }
}

