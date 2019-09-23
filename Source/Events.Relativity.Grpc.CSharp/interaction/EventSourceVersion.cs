// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Events.Relativity/interaction/event_source_version.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Dolittle.Runtime.Events.Relativity.Interaction.Grpc {

  /// <summary>Holder for reflection information generated from Events.Relativity/interaction/event_source_version.proto</summary>
  public static partial class EventSourceVersionReflection {

    #region Descriptor
    /// <summary>File descriptor for Events.Relativity/interaction/event_source_version.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static EventSourceVersionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjhFdmVudHMuUmVsYXRpdml0eS9pbnRlcmFjdGlvbi9ldmVudF9zb3VyY2Vf",
            "dmVyc2lvbi5wcm90bxIaZG9saXR0bGUuZXZlbnRzLnJlbGF0aXZpdHkiNgoS",
            "RXZlbnRTb3VyY2VWZXJzaW9uEg4KBmNvbW1pdBgBIAEoBBIQCghzZXF1ZW5j",
            "ZRgCIAEoDUI2qgIzRG9saXR0bGUuUnVudGltZS5FdmVudHMuUmVsYXRpdml0",
            "eS5JbnRlcmFjdGlvbi5HcnBjYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.EventSourceVersion), global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.EventSourceVersion.Parser, new[]{ "Commit", "Sequence" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Represents the version of an event source
  /// </summary>
  public sealed partial class EventSourceVersion : pb::IMessage<EventSourceVersion> {
    private static readonly pb::MessageParser<EventSourceVersion> _parser = new pb::MessageParser<EventSourceVersion>(() => new EventSourceVersion());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<EventSourceVersion> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Dolittle.Runtime.Events.Relativity.Interaction.Grpc.EventSourceVersionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public EventSourceVersion() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public EventSourceVersion(EventSourceVersion other) : this() {
      commit_ = other.commit_;
      sequence_ = other.sequence_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public EventSourceVersion Clone() {
      return new EventSourceVersion(this);
    }

    /// <summary>Field number for the "commit" field.</summary>
    public const int CommitFieldNumber = 1;
    private ulong commit_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ulong Commit {
      get { return commit_; }
      set {
        commit_ = value;
      }
    }

    /// <summary>Field number for the "sequence" field.</summary>
    public const int SequenceFieldNumber = 2;
    private uint sequence_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Sequence {
      get { return sequence_; }
      set {
        sequence_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as EventSourceVersion);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(EventSourceVersion other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Commit != other.Commit) return false;
      if (Sequence != other.Sequence) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Commit != 0UL) hash ^= Commit.GetHashCode();
      if (Sequence != 0) hash ^= Sequence.GetHashCode();
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
      if (Commit != 0UL) {
        output.WriteRawTag(8);
        output.WriteUInt64(Commit);
      }
      if (Sequence != 0) {
        output.WriteRawTag(16);
        output.WriteUInt32(Sequence);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Commit != 0UL) {
        size += 1 + pb::CodedOutputStream.ComputeUInt64Size(Commit);
      }
      if (Sequence != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Sequence);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(EventSourceVersion other) {
      if (other == null) {
        return;
      }
      if (other.Commit != 0UL) {
        Commit = other.Commit;
      }
      if (other.Sequence != 0) {
        Sequence = other.Sequence;
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
          case 8: {
            Commit = input.ReadUInt64();
            break;
          }
          case 16: {
            Sequence = input.ReadUInt32();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
