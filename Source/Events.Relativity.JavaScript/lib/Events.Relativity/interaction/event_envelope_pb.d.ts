// package: dolittle.events.relativity
// file: Events.Relativity/interaction/event_envelope.proto

import * as jspb from "google-protobuf";
import * as Events_Relativity_interaction_event_metadata_pb from "../../Events.Relativity/interaction/event_metadata_pb";
import * as Events_Relativity_interaction_property_bag_pb from "../../Events.Relativity/interaction/property_bag_pb";

export class EventEnvelope extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Events_Relativity_interaction_event_metadata_pb.EventMetadata | undefined;
  setMetadata(value?: Events_Relativity_interaction_event_metadata_pb.EventMetadata): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): Events_Relativity_interaction_property_bag_pb.PropertyBag | undefined;
  setEvent(value?: Events_Relativity_interaction_property_bag_pb.PropertyBag): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventEnvelope.AsObject;
  static toObject(includeInstance: boolean, msg: EventEnvelope): EventEnvelope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventEnvelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventEnvelope;
  static deserializeBinaryFromReader(message: EventEnvelope, reader: jspb.BinaryReader): EventEnvelope;
}

export namespace EventEnvelope {
  export type AsObject = {
    metadata?: Events_Relativity_interaction_event_metadata_pb.EventMetadata.AsObject,
    event?: Events_Relativity_interaction_property_bag_pb.PropertyBag.AsObject,
  }
}

