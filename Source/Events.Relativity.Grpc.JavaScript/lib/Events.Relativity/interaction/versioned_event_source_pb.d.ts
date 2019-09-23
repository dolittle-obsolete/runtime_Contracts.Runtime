// package: dolittle.events.relativity
// file: Events.Relativity/interaction/versioned_event_source.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";
import * as Events_Relativity_interaction_event_source_version_pb from "../../Events.Relativity/interaction/event_source_version_pb";

export class VersionedEventSource extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): Events_Relativity_interaction_event_source_version_pb.EventSourceVersion | undefined;
  setVersion(value?: Events_Relativity_interaction_event_source_version_pb.EventSourceVersion): void;

  hasEventsource(): boolean;
  clearEventsource(): void;
  getEventsource(): system_guid_pb.guid | undefined;
  setEventsource(value?: system_guid_pb.guid): void;

  hasArtifact(): boolean;
  clearArtifact(): void;
  getArtifact(): system_guid_pb.guid | undefined;
  setArtifact(value?: system_guid_pb.guid): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionedEventSource.AsObject;
  static toObject(includeInstance: boolean, msg: VersionedEventSource): VersionedEventSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionedEventSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionedEventSource;
  static deserializeBinaryFromReader(message: VersionedEventSource, reader: jspb.BinaryReader): VersionedEventSource;
}

export namespace VersionedEventSource {
  export type AsObject = {
    version?: Events_Relativity_interaction_event_source_version_pb.EventSourceVersion.AsObject,
    eventsource?: system_guid_pb.guid.AsObject,
    artifact?: system_guid_pb.guid.AsObject,
  }
}

