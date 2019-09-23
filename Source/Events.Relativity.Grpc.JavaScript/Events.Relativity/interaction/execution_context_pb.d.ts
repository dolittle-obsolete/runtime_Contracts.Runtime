// package: dolittle.events.relativity
// file: Events.Relativity/interaction/execution_context.proto

import * as jspb from "google-protobuf";
import * as system_guid_pb from "../../system/guid_pb";
import * as Events_Relativity_interaction_claim_pb from "../../Events.Relativity/interaction/claim_pb";

export class ExecutionContext extends jspb.Message {
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

  hasCorrelationid(): boolean;
  clearCorrelationid(): void;
  getCorrelationid(): system_guid_pb.guid | undefined;
  setCorrelationid(value?: system_guid_pb.guid): void;

  getEnvironment(): string;
  setEnvironment(value: string): void;

  clearClaimsList(): void;
  getClaimsList(): Array<Events_Relativity_interaction_claim_pb.Claim>;
  setClaimsList(value: Array<Events_Relativity_interaction_claim_pb.Claim>): void;
  addClaims(value?: Events_Relativity_interaction_claim_pb.Claim, index?: number): Events_Relativity_interaction_claim_pb.Claim;

  getCulture(): string;
  setCulture(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionContext.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionContext): ExecutionContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionContext;
  static deserializeBinaryFromReader(message: ExecutionContext, reader: jspb.BinaryReader): ExecutionContext;
}

export namespace ExecutionContext {
  export type AsObject = {
    application?: system_guid_pb.guid.AsObject,
    boundedcontext?: system_guid_pb.guid.AsObject,
    tenant?: system_guid_pb.guid.AsObject,
    correlationid?: system_guid_pb.guid.AsObject,
    environment: string,
    claimsList: Array<Events_Relativity_interaction_claim_pb.Claim.AsObject>,
    culture: string,
  }
}

