// GENERATED CODE -- DO NOT EDIT!

// package: dolittle.runtime.application.server
// file: Application/server/clients.proto

import * as Application_server_clients_pb from "../../Application/server/clients_pb";
import * as Application_client_info_pb from "../../Application/client_info_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IClientsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  connect: grpc.MethodDefinition<Application_client_info_pb.ClientInfo, google_protobuf_empty_pb.Empty>;
}

export const ClientsService: IClientsService;

export class ClientsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  connect(argument: Application_client_info_pb.ClientInfo, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_protobuf_empty_pb.Empty>;
  connect(argument: Application_client_info_pb.ClientInfo, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_protobuf_empty_pb.Empty>;
}
