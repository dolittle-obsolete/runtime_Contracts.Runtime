// package: dolittle.events.relativity
// file: Events.Relativity/interaction/committed_event_stream_with_context.proto

import * as jspb from "google-protobuf";
import * as Events_Relativity_interaction_committed_event_stream_pb from "../../Events.Relativity/interaction/committed_event_stream_pb";
import * as Events_Relativity_interaction_execution_context_pb from "../../Events.Relativity/interaction/execution_context_pb";

export class CommittedEventStreamWithContext extends jspb.Message {
  hasCommit(): boolean;
  clearCommit(): void;
  getCommit(): Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream | undefined;
  setCommit(value?: Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): Events_Relativity_interaction_execution_context_pb.ExecutionContext | undefined;
  setContext(value?: Events_Relativity_interaction_execution_context_pb.ExecutionContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommittedEventStreamWithContext.AsObject;
  static toObject(includeInstance: boolean, msg: CommittedEventStreamWithContext): CommittedEventStreamWithContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommittedEventStreamWithContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommittedEventStreamWithContext;
  static deserializeBinaryFromReader(message: CommittedEventStreamWithContext, reader: jspb.BinaryReader): CommittedEventStreamWithContext;
}

export namespace CommittedEventStreamWithContext {
  export type AsObject = {
    commit?: Events_Relativity_interaction_committed_event_stream_pb.CommittedEventStream.AsObject,
    context?: Events_Relativity_interaction_execution_context_pb.ExecutionContext.AsObject,
  }
}

