// package: dolittle.runtime.application.management
// file: Application/management/clients.proto

import * as jspb from "google-protobuf";
import * as Application_client_info_pb from "../../Application/client_info_pb";

export class ConnectedClientsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedClientsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedClientsRequest): ConnectedClientsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedClientsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedClientsRequest;
  static deserializeBinaryFromReader(message: ConnectedClientsRequest, reader: jspb.BinaryReader): ConnectedClientsRequest;
}

export namespace ConnectedClientsRequest {
  export type AsObject = {
  }
}

export class ConnectedClient extends jspb.Message {
  hasClient(): boolean;
  clearClient(): void;
  getClient(): Application_client_info_pb.ClientInfo | undefined;
  setClient(value?: Application_client_info_pb.ClientInfo): void;

  getConnectiontime(): number;
  setConnectiontime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedClient.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedClient): ConnectedClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedClient;
  static deserializeBinaryFromReader(message: ConnectedClient, reader: jspb.BinaryReader): ConnectedClient;
}

export namespace ConnectedClient {
  export type AsObject = {
    client?: Application_client_info_pb.ClientInfo.AsObject,
    connectiontime: number,
  }
}

export class ConnectedClientsResponse extends jspb.Message {
  clearClientsList(): void;
  getClientsList(): Array<ConnectedClient>;
  setClientsList(value: Array<ConnectedClient>): void;
  addClients(value?: ConnectedClient, index?: number): ConnectedClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedClientsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedClientsResponse): ConnectedClientsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectedClientsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedClientsResponse;
  static deserializeBinaryFromReader(message: ConnectedClientsResponse, reader: jspb.BinaryReader): ConnectedClientsResponse;
}

export namespace ConnectedClientsResponse {
  export type AsObject = {
    clientsList: Array<ConnectedClient.AsObject>,
  }
}

