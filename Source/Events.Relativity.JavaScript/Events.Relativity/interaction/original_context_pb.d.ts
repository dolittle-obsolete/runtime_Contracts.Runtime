// package: dolittle.events.relativity
// file: Events.Relativity/interaction/original_context.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";
import * as Events_Relativity_interaction_claim_pb from "../../Events.Relativity/interaction/claim_pb";

export class OriginalContext extends jspb.Message {
  hasApplication(): boolean;
  clearApplication(): void;
  getApplication(): system_guid_pb.guid | undefined;
  setApplication(value?: system_guid_pb.guid): void;

  hasBoundedcontext(): boolean;
  clearBoundedcontext(): void;
  getBoundedcontext(): system_guid_pb.guid | undefined;
  setBoundedcontext(value?: system_guid_pb.guid): void;

  hasTenant(): boolean;
  clearTenant(): void;
  getTenant(): system_guid_pb.guid | undefined;
  setTenant(value?: system_guid_pb.guid): void;

  getEnvironment(): string;
  setEnvironment(value: string): void;

  clearClaimsList(): void;
  getClaimsList(): Array<Events_Relativity_interaction_claim_pb.Claim>;
  setClaimsList(value: Array<Events_Relativity_interaction_claim_pb.Claim>): void;
  addClaims(value?: Events_Relativity_interaction_claim_pb.Claim, index?: number): Events_Relativity_interaction_claim_pb.Claim;

  getCommitinorigin(): number;
  setCommitinorigin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalContext.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalContext): OriginalContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OriginalContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalContext;
  static deserializeBinaryFromReader(message: OriginalContext, reader: jspb.BinaryReader): OriginalContext;
}

export namespace OriginalContext {
  export type AsObject = {
    application?: system_guid_pb.guid.AsObject,
    boundedcontext?: system_guid_pb.guid.AsObject,
    tenant?: system_guid_pb.guid.AsObject,
    environment: string,
    claimsList: Array<Events_Relativity_interaction_claim_pb.Claim.AsObject>,
    commitinorigin: number,
  }
}

