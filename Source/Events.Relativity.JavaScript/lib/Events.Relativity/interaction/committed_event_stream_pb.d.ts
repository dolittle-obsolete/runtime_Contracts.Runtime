// package: dolittle.events.relativity
// file: Events.Relativity/interaction/committed_event_stream.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";
import * as Events_Relativity_interaction_versioned_event_source_pb from "../../Events.Relativity/interaction/versioned_event_source_pb";
import * as Events_Relativity_interaction_event_envelope_pb from "../../Events.Relativity/interaction/event_envelope_pb";

export class CommittedEventStream extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): Events_Relativity_interaction_versioned_event_source_pb.VersionedEventSource | undefined;
  setSource(value?: Events_Relativity_interaction_versioned_event_source_pb.VersionedEventSource): void;

  getSequence(): number;
  setSequence(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): system_guid_pb.guid | undefined;
  setId(value?: system_guid_pb.guid): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  hasCorrelationid(): boolean;
  clearCorrelationid(): void;
  getCorrelationid(): system_guid_pb.guid | undefined;
  setCorrelationid(value?: system_guid_pb.guid): void;

  clearEventsList(): void;
  getEventsList(): Array<Events_Relativity_interaction_event_envelope_pb.EventEnvelope>;
  setEventsList(value: Array<Events_Relativity_interaction_event_envelope_pb.EventEnvelope>): void;
  addEvents(value?: Events_Relativity_interaction_event_envelope_pb.EventEnvelope, index?: number): Events_Relativity_interaction_event_envelope_pb.EventEnvelope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommittedEventStream.AsObject;
  static toObject(includeInstance: boolean, msg: CommittedEventStream): CommittedEventStream.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommittedEventStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommittedEventStream;
  static deserializeBinaryFromReader(message: CommittedEventStream, reader: jspb.BinaryReader): CommittedEventStream;
}

export namespace CommittedEventStream {
  export type AsObject = {
    source?: Events_Relativity_interaction_versioned_event_source_pb.VersionedEventSource.AsObject,
    sequence: number,
    id?: system_guid_pb.guid.AsObject,
    timestamp: number,
    correlationid?: system_guid_pb.guid.AsObject,
    eventsList: Array<Events_Relativity_interaction_event_envelope_pb.EventEnvelope.AsObject>,
  }
}

