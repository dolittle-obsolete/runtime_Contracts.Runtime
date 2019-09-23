// package: dolittle.runtime.application.server
// file: Application/server/clients.proto

import * as jspb from "google-protobuf";
import * as Application_client_info_pb from "../../Application/client_info_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ConnectionResult extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionResult): ConnectionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionResult;
  static deserializeBinaryFromReader(message: ConnectionResult, reader: jspb.BinaryReader): ConnectionResult;
}

export namespace ConnectionResult {
  export type AsObject = {
    status: string,
  }
}

