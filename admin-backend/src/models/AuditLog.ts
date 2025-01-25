import mongoose, { Schema, Document } from 'mongoose';

export interface IAuditLog extends Document {
  adminId: string;
  action: string;
  timestamp: Date;
  
}

const AuditLogSchema: Schema = new Schema({
  adminId: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);
