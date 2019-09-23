// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Events.Relativity/interaction/open_tunnel.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Dolittle.Runtime.Events.Relativity.Interaction.Grpc {

  /// <summary>Holder for reflection information generated from Events.Relativity/interaction/open_tunnel.proto</summary>
  public static partial class OpenTunnelReflection {

    #region Descriptor
    /// <summary>File descriptor for Events.Relativity/interaction/open_tunnel.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static OpenTunnelReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci9FdmVudHMuUmVsYXRpdml0eS9pbnRlcmFjdGlvbi9vcGVuX3R1bm5lbC5w",
            "cm90bxIaZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkaEXN5c3RlbS9ndWlk",
            "LnByb3RvGixFdmVudHMuUmVsYXRpdml0eS9pbnRlcmFjdGlvbi9hcnRpZmFj",
            "dC5wcm90bxoxRXZlbnRzLlJlbGF0aXZpdHkvaW50ZXJhY3Rpb24vdGVuYW50",
            "X29mZnNldC5wcm90byLsAQoKT3BlblR1bm5lbBIjCgthcHBsaWNhdGlvbhgB",
            "IAEoCzIOLmRvbGl0dGxlLmd1aWQSJgoOYm91bmRlZENvbnRleHQYAiABKAsy",
            "Di5kb2xpdHRsZS5ndWlkEiAKCGNsaWVudElkGAMgASgLMg4uZG9saXR0bGUu",
            "Z3VpZBI5CgdvZmZzZXRzGAQgAygLMiguZG9saXR0bGUuZXZlbnRzLnJlbGF0",
            "aXZpdHkuVGVuYW50T2Zmc2V0EjQKBmV2ZW50cxgFIAMoCzIkLmRvbGl0dGxl",
            "LmV2ZW50cy5yZWxhdGl2aXR5LkFydGlmYWN0QjaqAjNEb2xpdHRsZS5SdW50",
            "aW1lLkV2ZW50cy5SZWxhdGl2aXR5LkludGVyYWN0aW9uLkdycGNiBnByb3Rv",
            "Mw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::System.Protobuf.GuidReflection.Descriptor, global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.ArtifactReflection.Descriptor, global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.TenantOffsetReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.OpenTunnel), global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.OpenTunnel.Parser, new[]{ "Application", "BoundedContext", "ClientId", "Offsets", "Events" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Open tunnel is the message sent when opening a tunnel from a singularity towards an event horizon
  /// </summary>
  public sealed partial class OpenTunnel : pb::IMessage<OpenTunnel> {
    private static readonly pb::MessageParser<OpenTunnel> _parser = new pb::MessageParser<OpenTunnel>(() => new OpenTunnel());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<OpenTunnel> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.OpenTunnelReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OpenTunnel() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OpenTunnel(OpenTunnel other) : this() {
      application_ = other.application_ != null ? other.application_.Clone() : null;
      boundedContext_ = other.boundedContext_ != null ? other.boundedContext_.Clone() : null;
      clientId_ = other.clientId_ != null ? other.clientId_.Clone() : null;
      offsets_ = other.offsets_.Clone();
      events_ = other.events_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OpenTunnel Clone() {
      return new OpenTunnel(this);
    }

    /// <summary>Field number for the "application" field.</summary>
    public const int ApplicationFieldNumber = 1;
    private global::System.Protobuf.guid application_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid Application {
      get { return application_; }
      set {
        application_ = value;
      }
    }

    /// <summary>Field number for the "boundedContext" field.</summary>
    public const int BoundedContextFieldNumber = 2;
    private global::System.Protobuf.guid boundedContext_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid BoundedContext {
      get { return boundedContext_; }
      set {
        boundedContext_ = value;
      }
    }

    /// <summary>Field number for the "clientId" field.</summary>
    public const int ClientIdFieldNumber = 3;
    private global::System.Protobuf.guid clientId_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::System.Protobuf.guid ClientId {
      get { return clientId_; }
      set {
        clientId_ = value;
      }
    }

    /// <summary>Field number for the "offsets" field.</summary>
    public const int OffsetsFieldNumber = 4;
    private static readonly pb::FieldCodec<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.TenantOffset> _repeated_offsets_codec
        = pb::FieldCodec.ForMessage(34, global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.TenantOffset.Parser);
    private readonly pbc::RepeatedField<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.TenantOffset> offsets_ = new pbc::RepeatedField<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.TenantOffset>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.TenantOffset> Offsets {
      get { return offsets_; }
    }

    /// <summary>Field number for the "events" field.</summary>
    public const int EventsFieldNumber = 5;
    private static readonly pb::FieldCodec<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.Artifact> _repeated_events_codec
        = pb::FieldCodec.ForMessage(42, global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.Artifact.Parser);
    private readonly pbc::RepeatedField<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.Artifact> events_ = new pbc::RepeatedField<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.Artifact>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.Artifact> Events {
      get { return events_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as OpenTunnel);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(OpenTunnel other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Application, other.Application)) return false;
      if (!object.Equals(BoundedContext, other.BoundedContext)) return false;
      if (!object.Equals(ClientId, other.ClientId)) return false;
      if(!offsets_.Equals(other.offsets_)) return false;
      if(!events_.Equals(other.events_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (application_ != null) hash ^= Application.GetHashCode();
      if (boundedContext_ != null) hash ^= BoundedContext.GetHashCode();
      if (clientId_ != null) hash ^= ClientId.GetHashCode();
      hash ^= offsets_.GetHashCode();
      hash ^= events_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (application_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Application);
      }
      if (boundedContext_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(BoundedContext);
      }
      if (clientId_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(ClientId);
      }
      offsets_.WriteTo(output, _repeated_offsets_codec);
      events_.WriteTo(output, _repeated_events_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (application_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Application);
      }
      if (boundedContext_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(BoundedContext);
      }
      if (clientId_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(ClientId);
      }
      size += offsets_.CalculateSize(_repeated_offsets_codec);
      size += events_.CalculateSize(_repeated_events_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(OpenTunnel other) {
      if (other == null) {
        return;
      }
      if (other.application_ != null) {
        if (application_ == null) {
          Application = new global::System.Protobuf.guid();
        }
        Application.MergeFrom(other.Application);
      }
      if (other.boundedContext_ != null) {
        if (boundedContext_ == null) {
          BoundedContext = new global::System.Protobuf.guid();
        }
        BoundedContext.MergeFrom(other.BoundedContext);
      }
      if (other.clientId_ != null) {
        if (clientId_ == null) {
          ClientId = new global::System.Protobuf.guid();
        }
        ClientId.MergeFrom(other.ClientId);
      }
      offsets_.Add(other.offsets_);
      events_.Add(other.events_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (application_ == null) {
              Application = new global::System.Protobuf.guid();
            }
            input.ReadMessage(Application);
            break;
          }
          case 18: {
            if (boundedContext_ == null) {
              BoundedContext = new global::System.Protobuf.guid();
            }
            input.ReadMessage(BoundedContext);
            break;
          }
          case 26: {
            if (clientId_ == null) {
              ClientId = new global::System.Protobuf.guid();
            }
            input.ReadMessage(ClientId);
            break;
          }
          case 34: {
            offsets_.AddEntriesFrom(input, _repeated_offsets_codec);
            break;
          }
          case 42: {
            events_.AddEntriesFrom(input, _repeated_events_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
