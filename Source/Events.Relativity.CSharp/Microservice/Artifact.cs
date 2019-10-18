// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Events.Relativity/Microservice/artifact.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Dolittle.Events.Relativity.Microservice {

  /// <summary>Holder for reflection information generated from Events.Relativity/Microservice/artifact.proto</summary>
  public static partial class ArtifactReflection {

    #region Descriptor
    /// <summary>File descriptor for Events.Relativity/Microservice/artifact.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ArtifactReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci1FdmVudHMuUmVsYXRpdml0eS9NaWNyb3NlcnZpY2UvYXJ0aWZhY3QucHJv",
            "dG8SJ2RvbGl0dGxlLmV2ZW50cy5yZWxhdGl2aXR5Lm1pY3Jvc2VydmljZSIq",
            "CghBcnRpZmFjdBIKCgJpZBgBIAEoDBISCgpnZW5lcmF0aW9uGAIgASgFQiqq",
            "AidEb2xpdHRsZS5FdmVudHMuUmVsYXRpdml0eS5NaWNyb3NlcnZpY2ViBnBy",
            "b3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Dolittle.Events.Relativity.Microservice.Artifact), global::Dolittle.Events.Relativity.Microservice.Artifact.Parser, new[]{ "Id", "Generation" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Represents the artifact
  /// </summary>
  public sealed partial class Artifact : pb::IMessage<Artifact> {
    private static readonly pb::MessageParser<Artifact> _parser = new pb::MessageParser<Artifact>(() => new Artifact());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Artifact> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Dolittle.Events.Relativity.Microservice.ArtifactReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Artifact() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Artifact(Artifact other) : this() {
      id_ = other.id_;
      generation_ = other.generation_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Artifact Clone() {
      return new Artifact(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private pb::ByteString id_ = pb::ByteString.Empty;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString Id {
      get { return id_; }
      set {
        id_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "generation" field.</summary>
    public const int GenerationFieldNumber = 2;
    private int generation_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int Generation {
      get { return generation_; }
      set {
        generation_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Artifact);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Artifact other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (Generation != other.Generation) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (Generation != 0) hash ^= Generation.GetHashCode();
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
      if (Id.Length != 0) {
        output.WriteRawTag(10);
        output.WriteBytes(Id);
      }
      if (Generation != 0) {
        output.WriteRawTag(16);
        output.WriteInt32(Generation);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Id.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Id);
      }
      if (Generation != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Generation);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Artifact other) {
      if (other == null) {
        return;
      }
      if (other.Id.Length != 0) {
        Id = other.Id;
      }
      if (other.Generation != 0) {
        Generation = other.Generation;
      }
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
            Id = input.ReadBytes();
            break;
          }
          case 16: {
            Generation = input.ReadInt32();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
