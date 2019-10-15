// GENERATED CODE -- DO NOT EDIT!

// package: dolittle.events.relativity
// file: Events.Relativity/interaction/quantum_tunnel.proto

import * as Events_Relativity_interaction_quantum_tunnel_pb from "../../Events.Relativity/interaction/quantum_tunnel_pb";
import * as Events_Relativity_interaction_open_tunnel_pb from "../../Events.Relativity/interaction/open_tunnel_pb";
import * as Events_Relativity_interaction_committed_event_stream_with_context_pb from "../../Events.Relativity/interaction/committed_event_stream_with_context_pb";
import * as grpc from "grpc";

interface IQuantumTunnelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  open: grpc.MethodDefinition<Events_Relativity_interaction_open_tunnel_pb.OpenTunnel, Events_Relativity_interaction_committed_event_stream_with_context_pb.CommittedEventStreamWithContext>;
}

export const QuantumTunnelServiceService: IQuantumTunnelServiceService;

export class QuantumTunnelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  open(argument: Events_Relativity_interaction_open_tunnel_pb.OpenTunnel, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<Events_Relativity_interaction_committed_event_stream_with_context_pb.CommittedEventStreamWithContext>;
  open(argument: Events_Relativity_interaction_open_tunnel_pb.OpenTunnel, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<Events_Relativity_interaction_committed_event_stream_with_context_pb.CommittedEventStreamWithContext>;
}
