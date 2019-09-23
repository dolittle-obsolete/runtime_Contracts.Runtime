// GENERATED CODE -- DO NOT EDIT!

// package: dolittle.runtime.application.management
// file: Application/management/clients.proto

import * as Application_management_clients_pb from "../../Application/management/clients_pb";
import * as grpc from "grpc";

interface IClientsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getConnectedClients: grpc.MethodDefinition<Application_management_clients_pb.ConnectedClientsRequest, Application_management_clients_pb.ConnectedClientsResponse>;
}

export const ClientsService: IClientsService;

export class ClientsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getConnectedClients(argument: Application_management_clients_pb.ConnectedClientsRequest, callback: grpc.requestCallback<Application_management_clients_pb.ConnectedClientsResponse>): grpc.ClientUnaryCall;
  getConnectedClients(argument: Application_management_clients_pb.ConnectedClientsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<Application_management_clients_pb.ConnectedClientsResponse>): grpc.ClientUnaryCall;
  getConnectedClients(argument: Application_management_clients_pb.ConnectedClientsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<Application_management_clients_pb.ConnectedClientsResponse>): grpc.ClientUnaryCall;
}
