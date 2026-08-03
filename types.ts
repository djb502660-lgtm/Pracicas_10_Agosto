export interface AudioState {
  isPlaying: boolean;
  volume: number;
}

export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error',
}

export interface BlobData {
    data: string;
    mimeType: string;
}

export interface Assistant {
  id: string;
  name: string;
  description: string;
  voiceName: 'Puck' | 'Charon' | 'Kore' | 'Fenrir' | 'Zephyr' | 'Aoede';
  systemInstruction: string;
  theme: 'cyan' | 'rose' | 'amber' | 'violet';
  avatar?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: number;
  assistantId?: string;
  isLive?: boolean;
}