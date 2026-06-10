import React, { useState, useEffect, useRef } from 'react';
import { Reorder, useDragControls, AnimatePresence, motion } from 'motion/react';
import {
  Briefcase, Coffee, Dumbbell, Book, Phone, Utensils,
  Moon, Sun, Car, ShoppingBag, Music, Heart, Trees, BatteryFull, Bed, Camera,
  Plus, GripVertical, Trash2, Edit2, X, Calendar, Clock,
  ListOrdered, Copy, Sparkles, Languages, Loader2,
  Share2, Image as ImageIcon, FileText, Download, ImagePlus, Video, Undo2, Redo2, LayoutTemplate, Save, FolderOpen, ArrowDownNarrowWide, Shirt, BookUser, Home, Menu, PlaneTakeoff, PlaneLanding
} from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const Football = ({ size = 24, className = '', ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1920 1920" fill="none" className={className} {...props}>
    <style>
        {`.st0{fill:#fff}.st1{fill:none;stroke:currentColor;stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}`}
    </style>
    <path className="st0" d="M616.9 1476.6l54.5 167.8c-92.7-39.1-175.8-96.6-244.8-167.8h190.3zm631.7 167.7c92.7-39.1 175.8-96.6 244.8-167.8h-190.2l-54.6 167.8zM960 664.7L649.5 890.3l118.6 365h383.7l118.6-365L960 664.7zM1540.5 497l-17.8 305.9 174.6 68.2c-16.8-140.5-72.8-268.9-156.8-374.1zM960 217.5c-69.7 0-137.2 9.6-201.2 27.6L960 391.3l201.2-146.2c-64-18-131.5-27.6-201.2-27.6zM222.8 871.1l174.6-68.2L379.5 497c-84 105.2-140 233.6-156.7 374.1z" strokeWidth="5" stroke="currentColor"/>
    <path className="st0" d="M649.5 890.3l118.6 365-151.3 221.3H426.6C297.2 1342.9 217.5 1160.8 217.5 960c0-30.1 1.8-59.7 5.3-88.9l174.6-68.2 252.1 87.4zm118.6 365l-151.3 221.3 54.5 167.8c88.7 37.5 186.2 58.2 288.6 58.2s199.9-20.7 288.6-58.2l54.5-167.8-151.3-221.3H768.1zm754.6-452.4l-252.2 87.4-118.6 365 151.3 221.3h190.2c129.5-133.7 209.1-315.8 209.1-516.6 0-30.1-1.8-59.7-5.3-88.9l-174.5-68.2zm-361.5-557.8L960 391.3v273.5l310.5 225.6 252.2-87.4 17.8-305.9c-95.7-119.9-227.7-209.4-379.3-252zm-402.4 0C607.2 287.7 475.2 377.2 379.5 497l17.9 305.9 252.2 87.4L960 664.7V391.3L758.8 245.1z" strokeWidth="5" stroke="currentColor"/>
    <g strokeWidth="5" stroke="currentColor">
        <path className="st1" d="M960 664.7l310.5 225.6-118.6 365H768.1l-118.6-365z"/>
        <path className="st1" d="M1493.4 1476.6c129.5-133.7 209.1-315.8 209.1-516.6 0-30.1-1.8-59.7-5.3-88.9"/>
        <path className="st1" d="M671.4 1644.3c88.7 37.5 186.2 58.2 288.6 58.2s199.9-20.7 288.6-58.2"/>
        <path className="st1" d="M222.8 871.1c-3.5 29.1-5.3 58.8-5.3 88.9 0 200.8 79.7 382.9 209.1 516.6"/>
        <path className="st1" d="M758.8 245.1C607.2 287.7 475.2 377.2 379.5 497"/>
        <path className="st1" d="M1540.5 497c-95.7-119.8-227.7-209.3-379.3-251.9"/>
        <path className="st1" d="M1248.6 1644.3c92.7-39.1 175.8-96.6 244.8-167.8h-190.2l-54.6 167.8z"/>
        <path className="st1" d="M426.6 1476.6c69 71.2 152 128.6 244.8 167.8l-54.5-167.8H426.6z"/>
        <path className="st1" d="M379.5 497c-84 105.1-140 233.6-156.7 374.1l174.6-68.2L379.5 497z"/>
        <path className="st1" d="M1522.7 802.9l174.6 68.2c-16.8-140.5-72.8-269-156.7-374.1l-17.9 305.9z"/>
        <path className="st1" d="M1161.2 245.1c-64-18-131.5-27.6-201.2-27.6s-137.2 9.6-201.2 27.6L960 391.3l201.2-146.2z"/>
        <path className="st1" d="M768.1 1255.3l-151.2 221.3"/>
        <path className="st1" d="M1151.9 1255.3l151.2 221.3"/>
        <path className="st1" d="M1270.5 890.3l252.2-87.4"/>
        <path className="st1" d="M649.5 890.3l-252.1-87.4"/>
        <path className="st1" d="M960 391.3v273.4"/>
    </g>
  </svg>
);

const Passport = ({ size = 24, className = '', ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} {...props}>
    <path d="M27.31,8.5558l-7.5-2.32a1.824,1.824,0,0,0-2.27,1.2l-.28.9H8.13a1.8094,1.8094,0,0,0-1.81,1.81v15.46a1.818,1.818,0,0,0,1.81,1.82h3.78a1.7715,1.7715,0,0,0,1.08.92l7.69,2.37a1.6819,1.6819,0,0,0,.54.08,1.8532,1.8532,0,0,0,.86-.21,1.8093,1.8093,0,0,0,.88-1.09l1.56-5.23v-.02l4-13.44A1.82,1.82,0,0,0,27.31,8.5558ZM8.13,26.7358A1.1288,1.1288,0,0,1,7,25.6059v-15.46a1.1353,1.1353,0,0,1,1.13-1.13H18.9a1.14,1.14,0,0,1,1.14,1.11l.05,2.89.01.72.02,1.13.04,2.55.01.86.01.68.07,3.98v.08l.04,2.57a1.1274,1.1274,0,0,1-1.14,1.15Zm14.18,2.57a1.1776,1.1776,0,0,1-.56.68,1.1232,1.1232,0,0,1-.53.13,1.2634,1.2634,0,0,1-.33-.05l-7.7-2.37a1.0855,1.0855,0,0,1-.45-.27h6.41a1.8329,1.8329,0,0,0,1.3-.55,1.8047,1.8047,0,0,0,.52-1.3l-.03-2.13,2.83.93Zm.05-15.78,2.6,3.49-.09.35-2.63-2.09a.3651.3651,0,0,0-.32-.06.3757.3757,0,0,0-.22.24l-.53,1.94a.3349.3349,0,0,0,.02.24l.7,1.5-.03.07-1-.7-.05-2.97.08-.3a.3353.3353,0,0,0-.07-.32l-.02-.02-.03-1.44.53-.22a.337.337,0,0,0,.2-.22l.49-1.78c.18-.68.52-.83.67-.87.11.11.32.41.14,1.09l-.49,1.78A.3307.3307,0,0,0,22.36,13.5258Zm5.5-2.92-3.89,13.11-3.05-.98-.05-3.4,1,.71a.36.36,0,0,0,.2.06.2342.2342,0,0,0,.11-.02.3266.3266,0,0,0,.21-.23l.19-.66a.3973.3973,0,0,0-.02-.24l-.7-1.5.36-1.32,2.63,2.08a.3655.3655,0,0,0,.32.06.3384.3384,0,0,0,.22-.23l.27-1.01a.3306.3306,0,0,0-.05-.29l-2.6-3.49.44-1.62c.4-1.44-.51-1.91-.55-1.92a.2457.2457,0,0,0-.12-.04c-.05,0-1.05-.07-1.45,1.38l-.44,1.62-.13.05-.04-2.61a1.825,1.825,0,0,0-1.82-1.78h-.93l.22-.7a1.1292,1.1292,0,0,1,.56-.67,1.1866,1.1866,0,0,1,.53-.13,1.2654,1.2654,0,0,1,.33.05l7.5,2.32A1.1276,1.1276,0,0,1,27.86,10.6059Z"/><path d="M19.15,24.1757a.3371.3371,0,0,0,.34-.34.3435.3435,0,0,0-.34-.34H8.13a.3436.3436,0,0,0-.34.34.3371.3371,0,0,0,.34.34H19.15Z"/><path d="M9.34,18.7858a4.9824,4.9824,0,0,0,3.96,2.39.9708.9708,0,0,0,.17.01.2134.2134,0,0,0,.08,0,.2772.2772,0,0,0,.09.01c.06,0,.13-.01.19-.01a1.0845,1.0845,0,0,0,.18-.01,4.994,4.994,0,0,0,3.93-2.39.2385.2385,0,0,0,.06-.08c0-.01.01-.01.01-.02.03-.05.05-.09.08-.14,0-.01.01-.01.01-.02a4.8711,4.8711,0,0,0,.32-.74,5.0168,5.0168,0,0,0,.28-1.65c0-.13-.01-.26-.02-.39a4.8854,4.8854,0,0,0-.09-.67,4.5842,4.5842,0,0,0-.19-.63,4.8311,4.8311,0,0,0-.26-.62,2.2212,2.2212,0,0,0-.15-.26v-.01a.4233.4233,0,0,0-.05-.07,4.9572,4.9572,0,0,0-1.15-1.31,4.0664,4.0664,0,0,0-.59-.4,5.0467,5.0467,0,0,0-6.91,1.78v.01a5.0062,5.0062,0,0,0,0,5.14A.2173.2173,0,0,0,9.34,18.7858Zm.4-4.62a5.38,5.38,0,0,0,1.26.38,10.056,10.056,0,0,0-.13,1.59,9.8313,9.8313,0,0,0,.13,1.58,6.7659,6.7659,0,0,0-1.26.38,4.3425,4.3425,0,0,1,0-3.93Zm1.81,1.97a7.7353,7.7353,0,0,1,.13-1.47,11.7965,11.7965,0,0,0,1.62.13v2.68a12.1922,12.1922,0,0,0-1.62.13A7.736,7.736,0,0,1,11.55,16.1357Zm4.06-1.47a7.391,7.391,0,0,1,.12.96c0,.17.01.34.01.51a7.6247,7.6247,0,0,1-.13,1.46c-.15-.02-.31-.04-.47-.06-.23-.02-.46-.04-.7-.05-.15-.01-.31-.01-.46-.01v-2.68c.45-.01.9-.04,1.32-.09A2.9092,2.9092,0,0,0,15.61,14.6657Zm-2.31,3.49v2.29a3.0222,3.0222,0,0,1-1.47-2.18A11.383,11.383,0,0,1,13.3,18.1557Zm.98,2.14a1.4684,1.4684,0,0,1-.3.16v-2.3h.25c.24.01.47.03.7.05.18.02.36.04.53.06A3.56,3.56,0,0,1,14.28,20.2958Zm-.3-6.19v-2.29a3.0511,3.0511,0,0,1,1.48,2.19A11.7317,11.7317,0,0,1,13.98,14.1059Zm-.68-2.28v2.28a11.4451,11.4451,0,0,1-1.47-.1A3.0235,3.0235,0,0,1,13.3,11.8256Zm-3.21,6.86a6.787,6.787,0,0,1,1.06-.31,5.5063,5.5063,0,0,0,.81,1.81A4.4337,4.4337,0,0,1,10.09,18.6857Zm5.25,1.49a5.6982,5.6982,0,0,0,.8-1.79,6.0281,6.0281,0,0,1,1.05.3A4.3645,4.3645,0,0,1,15.34,20.1757Zm2.57-5.01a3.8535,3.8535,0,0,1,.1.68,2.7863,2.7863,0,0,1,.01.29,4.3238,4.3238,0,0,1-.47,1.96,6.54,6.54,0,0,0-1.26-.38,9.8078,9.8078,0,0,0,.13-1.58c0-.11,0-.22-.01-.33v-.24q-.045-.5251-.12-1.02c.16-.03.31-.06.46-.1a.01.01,0,0,0,.01-.01,4.0611,4.0611,0,0,0,.79-.27,3.7516,3.7516,0,0,1,.23.55A2.9663,2.9663,0,0,1,17.91,15.1657Zm-1.92-2.72a4.2048,4.2048,0,0,1,.58.44,4.133,4.133,0,0,1,.62.7,4.8257,4.8257,0,0,1-.92.27c-.04.01-.09.02-.13.03a6.94,6.94,0,0,0-.31-.91,5.08,5.08,0,0,0-.49-.87A3.6364,3.6364,0,0,1,15.99,12.4457Zm-4.03-.35a5.28,5.28,0,0,0-.8,1.79,6.1554,6.1554,0,0,1-1.06-.3A4.2509,4.2509,0,0,1,11.96,12.0956Z"/>
  </svg>
);

const SoccerField = ({ size = 24, className = '', ...props }: any) => (
  <svg viewBox="0 0 45.474 45.474" width={size} height={size} className={className} fill="currentColor" {...props}>
    <path d="M43.953,0H1.52A1.522,1.522,0,0,0,0,1.521V43.953a1.522,1.522,0,0,0,1.52,1.521H43.953a1.522,1.522,0,0,0,1.521-1.521   V1.521A1.522,1.522,0,0,0,43.953,0z M44.258,43.953a0.304,0.304,0,0,1-0.305,0.305H1.52a0.305,0.305,0,0,1-0.304-0.305V23.345   H10.03v-1.216H1.216V1.521A0.305,0.305,0,0,1,1.52,1.216H43.953a0.304,0.304,0,0,1,0.305,0.305v20.608H35.443v1.216h8.814V43.953z" />
    <path d="M41.522,2.433h-1.216v5.472a1.826,1.826,0,0,1-1.825,1.824H8.484V1.521h1.216V8.513A0.609,0.609,0,0,0,10.309,9.12h26.741   h1.43v-2.06v-3.41c-2.85-2.851-2.094-1.216-2.094-1.216h6.398v1.215v-1.215H41.522z" />
    <path d="M41.522,43.041V37.57h1.216v5.472H41.52h1.266c0,0-0.756,1.635,2.094-1.216V36.35h-1.43H10.309   a0.608,0.608,0,0,0-0.608,0.608v6.991H8.484V35.73A1.826,1.826,0,0,1,10.309,33.91h28.172a1.826,1.826,0,0,1,1.825,1.824v7.307   h1.216C41.522,43.041,41.522,43.041,41.522,43.041z" />
    <path d="M4.865,11.552V6.688H1.216v-1.12c5.688,5.685,3.648,2.775,3.648,2.775V11.552H4.865z" />
    <path d="M1.216,40.001v-1.216h3.648v3.239v1.216c0,0,2.039-2.91-3.648,2.776V40.001z" />
    <path d="M22.737,13.985c-4.868,0-8.814,3.946-8.814,8.814h1.216c0-4.197,3.414-7.598,7.598-7.598   c4.184,0,7.598,3.401,7.598,7.598h1.216C31.551,17.932,27.605,13.985,22.737,13.985z" />
    <path d="M22.737,31.488c-4.171,0-7.597-3.411-7.598-7.581H13.92c0,0.015,0,0.03,0,0.045c0,4.867,3.946,8.752,8.816,8.752   c4.868,0,8.814-3.885,8.814-8.752c0-0.015,0-0.03,0-0.045h-1.216C30.334,28.078,26.908,31.488,22.737,31.488z" />
    <path d="M22.737,23.406c1.006,0,1.824-0.817,1.824-1.823s-0.818-1.824-1.824-1.824c-1.006,0-1.824,0.818-1.824,1.824   h0.001C20.914,22.589,21.73,23.406,22.737,23.406z M22.737,20.974c0.335,0,0.608,0.272,0.608,0.608s-0.273,0.607-0.608,0.607   c-0.336,0-0.609-0.272-0.609-0.607C22.128,21.247,22.401,20.974,22.737,20.974z" />
    <path d="M22.737,4.864c0.336,0,0.608-0.273,0.608-0.608V1.824c0-0.336-0.272-0.608-0.608-0.608c-0.335,0-0.608,0.272-0.608,0.608   v2.432C22.129,4.591,22.401,4.864,22.737,4.864z M22.737,8.513C22.737,8.513,22.737,8.513,22.737,8.513   c0.335,0,0.608-0.273,0.608-0.608V6.08c0-0.335-0.272-0.608-0.608-0.608c-0.336,0-0.608,0.273-0.608,0.608v1.824   C22.129,8.24,22.401,8.513,22.737,8.513z" />
    <path d="M22.737,44.258c0.335,0,0.608-0.273,0.608-0.608v-2.433c0-0.336-0.272-0.608-0.608-0.608   c-0.336,0-0.608,0.272-0.608,0.608v2.433C22.129,43.985,22.401,44.258,22.737,44.258z M22.737,39.395   C22.737,39.395,22.737,39.395,22.737,39.395c0.335,0,0.608-0.273,0.608-0.608V36.96c0-0.336-0.272-0.608-0.608-0.608   c-0.336,0-0.608,0.272-0.608,0.608v1.826C22.129,39.122,22.401,39.395,22.737,39.395z" />
  </svg>
);

const Stadium = ({ size = 24, className = '', ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2C6.48 2 2 4.4 2 8v8c0 3.6 4.48 6 10 6s10-2.4 10-6V8c0-3.6-4.48-6-10-6z"/>
    <ellipse cx="12" cy="8" rx="10" ry="6"/>
    <ellipse cx="12" cy="12" rx="5" ry="3"/>
  </svg>
);

const ICONS = {
  None: null,
  Dumbbell, Stadium, Football, SoccerField, Video, BatteryFull, BookUser, Shirt, Home,
  Briefcase, Coffee, Book, Phone, Utensils,
  Moon, Sun, Car, ShoppingBag, Music, Heart,
  Trees, Bed, Camera, PlaneTakeoff, PlaneLanding, Passport
};

export const COLORS = [
  { id: 'white', bg: 'bg-white', border: 'border-gray-100', label: 'Белый' },
  { id: 'red', bg: 'bg-red-50', border: 'border-red-200', label: 'Красный' },
  { id: 'blue', bg: 'bg-blue-50', border: 'border-blue-200', label: 'Синий' },
  { id: 'green', bg: 'bg-green-50', border: 'border-green-200', label: 'Зеленый' },
  { id: 'yellow', bg: 'bg-yellow-50', border: 'border-yellow-200', label: 'Желтый' },
  { id: 'purple', bg: 'bg-purple-50', border: 'border-purple-200', label: 'Фиолетовый' },
  { id: 'orange', bg: 'bg-orange-50', border: 'border-orange-200', label: 'Оранжевый' },
];

type IconName = keyof typeof ICONS;

export type BlockType = 'event' | 'h1' | 'h2' | 'h3' | 'comment';

interface DayEvent {
  id: string;
  type: BlockType;
  time?: string;
  endTime?: string;
  title: string;
  icon: IconName;
  color?: string;
}

interface Template {
  id: string;
  name: string;
  events: DayEvent[];
}

const DEFAULT_EVENTS: DayEvent[] = [
  { id: '0', type: 'h1', title: 'Мой план на день', icon: 'None' },
  { id: '1', type: 'event', time: '08:00', endTime: '09:00', title: 'Утренняя пробежка', icon: 'Dumbbell' },
  { id: '2', type: 'event', time: '09:30', title: 'Завтрак', icon: 'Coffee' },
  { id: '3', type: 'event', time: '10:00', endTime: '11:00', title: 'Рабочий митинг', icon: 'Briefcase' },
  { id: 'c1', type: 'comment', title: 'Не забыть подготовить отчет', icon: 'None' },
  { id: '4', type: 'event', time: '13:00', title: 'Обед', icon: 'Utensils' },
  { id: '5', type: 'event', time: '19:00', title: 'Чтение', icon: 'Book' },
];

const getTitleClasses = (type: BlockType) => {
  switch (type) {
    case 'h1': return 'text-2xl sm:text-3xl font-bold text-gray-900';
    case 'h2': return 'text-xl sm:text-2xl font-bold text-gray-800';
    case 'h3': return 'text-lg sm:text-xl font-bold text-gray-800';
    case 'comment': return 'text-sm sm:text-base italic text-gray-500 pl-3 py-1';
    default: return 'text-base sm:text-lg text-gray-900';
  }
};

const EventItem = ({ event, translation, isExporting, exportLayout, isDeleting, onEdit, onCopy, onDelete }: { key?: React.Key, event: DayEvent, translation?: string, isExporting?: boolean, exportLayout?: 'mobile' | 'desktop' | 'auto', isDeleting?: boolean, onEdit: (e: DayEvent) => void, onCopy: (e: DayEvent) => void, onDelete: (id: string) => void }) => {
  const controls = useDragControls();
  const Icon = ICONS[event.icon as IconName] || null;
  const colorObj = event.color ? COLORS.find(c => c.id === event.color) : null;
  const colorClasses = colorObj ? `${colorObj.bg} ${colorObj.border} border rounded-xl shadow-sm mb-2` : 'border border-transparent mb-0';

  return (
    <Reorder.Item
      value={event}
      id={event.id}
      dragListener={false}
      dragControls={controls}
      className={`group relative flex items-start px-2 py-4 sm:px-4 sm:py-5 select-none ${colorClasses}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={isDeleting ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.95 }}
      transition={isDeleting ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 25 }}
      whileDrag={{ scale: 1.02, backgroundColor: 'white', borderRadius: '1rem', boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", zIndex: 50 }}
    >
      {!isExporting && (
        <div
          className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing p-1 text-gray-300 hover:text-gray-500 rounded-lg transition-colors touch-none opacity-0 group-hover:opacity-100"
          onPointerDown={(e) => controls.start(e)}
        >
          <GripVertical size={16} />
        </div>
      )}

      <div className={`flex-shrink-0 w-8 sm:w-12 flex justify-center pt-0.5 text-gray-800`}>
        {Icon && <Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />}
      </div>

      <div className={`flex-grow min-w-0 ml-3 sm:ml-4`}>
        <div className="flex flex-col">
          <div className={`${isExporting && exportLayout === 'auto' ? 'whitespace-nowrap' : 'break-words'} ${getTitleClasses(event.type)}`}>
            {event.time && <span className="mr-2 font-normal">{event.time}{event.endTime && ` - ${event.endTime}`}</span>}
            {event.title}
          </div>
          {translation && translation !== event.title && (
            <div className={`text-base text-gray-500 mt-1 ${isExporting && exportLayout === 'auto' ? 'whitespace-nowrap' : 'break-words'}`}>
              {event.time && <span className="mr-2 hidden">{event.time}{event.endTime && ` - ${event.endTime}`}</span>}
              {translation}
            </div>
          )}
        </div>
      </div>

      {!isExporting && (
        <div className="flex items-center gap-1 flex-shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity ml-2">
          <button onClick={() => onCopy(event)} className="p-1.5 sm:p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Копировать">
            <Copy size={16} />
          </button>
          <button onClick={() => onEdit(event)} className="p-1.5 sm:p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Редактировать">
            <Edit2 size={16} />
          </button>
          <button onClick={() => onDelete(event.id)} className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Удалить">
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </Reorder.Item>
  );
};

export default function App() {
  const [events, setEventsBase] = useState<DayEvent[]>(() => {
    const saved = localStorage.getItem('dayplanner_events');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_EVENTS;
      }
    }
    return DEFAULT_EVENTS;
  });

  const [pastEvents, setPastEvents] = useState<DayEvent[][]>([]);
  const [futureEvents, setFutureEvents] = useState<DayEvent[][]>([]);

  const setEvents = (newEvents: DayEvent[] | ((prev: DayEvent[]) => DayEvent[])) => {
    setEventsBase(prev => {
      const nextEvents = typeof newEvents === 'function' ? newEvents(prev) : newEvents;
      setPastEvents(past => [...past, prev]);
      setFutureEvents([]);
      return nextEvents;
    });
  };

  const undo = () => {
    if (pastEvents.length === 0) return;
    const previous = pastEvents[pastEvents.length - 1];
    setPastEvents(past => past.slice(0, past.length - 1));
    setEventsBase(current => {
      setFutureEvents(future => [current, ...future]);
      return previous;
    });
  };

  const redo = () => {
    if (futureEvents.length === 0) return;
    const next = futureEvents[0];
    setFutureEvents(future => future.slice(1));
    setEventsBase(current => {
      setPastEvents(past => [...past, current]);
      return next;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<DayEvent | null>(null);

  const [templates, setTemplates] = useState<Template[]>(() => {
    const saved = localStorage.getItem('dayplanner_templates');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem('dayplanner_templates', JSON.stringify(templates));
  }, [templates]);

  const [isTemplatesModalOpen, setIsTemplatesModalOpen] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState('');
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [editingTemplateName, setEditingTemplateName] = useState('');

  const loadTemplate = (template: Template) => {
    setEvents(template.events);
    setIsTemplatesModalOpen(false);
  };

  const saveAsTemplate = () => {
    if (!newTemplateName.trim()) return;
    const newTemplate: Template = {
      id: crypto.randomUUID(),
      name: newTemplateName.trim(),
      events: [...events]
    };
    setTemplates([...templates, newTemplate]);
    setNewTemplateName('');
  };

  const updateTemplate = (id: string, newName?: string) => {
    setTemplates(templates.map(t => 
      t.id === id ? { ...t, name: newName || t.name, events: newName ? t.events : [...events] } : t
    ));
  };

  const deleteTemplate = (id: string) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  // Form State
  const [type, setType] = useState<BlockType>('event');
  const [time, setTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState<IconName>('None');
  const [color, setColor] = useState('white');

  // AI Features State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [targetLanguage, setTargetLanguage] = useState<string>('None');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const translatingIds = useRef<Set<string>>(new Set());

  // Glossary State
  const [glossary, setGlossary] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('dayplanner_glossary');
    return saved ? JSON.parse(saved) : {};
  });
  const [iconGlossary, setIconGlossary] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('dayplanner_icon_glossary');
    return saved ? JSON.parse(saved) : {};
  });
  const [isGlossaryModalOpen, setIsGlossaryModalOpen] = useState(false);
  const [activeGlossaryTab, setActiveGlossaryTab] = useState<'translate' | 'icons'>('translate');
  const [newGlossaryTerm, setNewGlossaryTerm] = useState('');
  const [newGlossaryTranslation, setNewGlossaryTranslation] = useState('');
  
  const [newIconGlossaryTerm, setNewIconGlossaryTerm] = useState('');
  const [newIconGlossaryIcon, setNewIconGlossaryIcon] = useState<string>('None');

  // Export State
  const scheduleRef = useRef<HTMLDivElement>(null);
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportLayout, setExportLayout] = useState<'mobile' | 'desktop' | 'auto'>('auto');
  const [isDeleting, setIsDeleting] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [scheduleTitle, setScheduleTitle] = useState('');

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    localStorage.setItem('dayplanner_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('dayplanner_glossary', JSON.stringify(glossary));
  }, [glossary]);

  useEffect(() => {
    localStorage.setItem('dayplanner_icon_glossary', JSON.stringify(iconGlossary));
  }, [iconGlossary]);

  // Clear translations when language changes or glossary changes
  useEffect(() => {
    setTranslations({});
    translatingIds.current.clear();
  }, [targetLanguage, glossary]);

  // Translate missing events
  useEffect(() => {
    if (targetLanguage === 'None') return;

    const missing = events.filter(e => !translations[e.id] && !translatingIds.current.has(e.id));
    if (missing.length === 0) return;

    missing.forEach(m => translatingIds.current.add(m.id));

    const translate = async () => {
      setIsTranslating(true);
      try {
        const itemsToTranslate = missing.map(e => ({ id: e.id, title: e.title }));
        const glossaryEntries = Object.entries(glossary).map(([k, v]) => `${k} -> ${v}`).join('\n');
        const glossaryPrompt = glossaryEntries ? `\n\nIMPORTANT: Use the following glossary to understand the meaning of specific terms. For example, if the glossary says 'зал -> gym' and the target language is Spanish, translate the concept of 'gym' into Spanish (i.e. 'gimnasio'). Adapt the glossary concepts to the requested target language (${targetLanguage}):\n${glossaryEntries}` : '';
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Translate the following short texts into ${targetLanguage}. Return a JSON array of objects with exactly 'id' and 'translatedText'.${glossaryPrompt}\n\n${JSON.stringify(itemsToTranslate)}`,
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  translatedText: { type: Type.STRING }
                },
                required: ['id', 'translatedText']
              }
            }
          }
        });

        const result = JSON.parse(response.text || '[]');
        setTranslations(prev => {
          const next = { ...prev };
          result.forEach((item: any) => {
            next[item.id] = item.translatedText;
          });
          missing.forEach(m => {
            if (!next[m.id]) next[m.id] = m.title;
          });
          return next;
        });
      } catch (error) {
        console.error("Translation Error:", error);
        setTranslations(prev => {
          const next = { ...prev };
          missing.forEach(m => {
             next[m.id] = m.title;
          });
          return next;
        });
      } finally {
        missing.forEach(m => translatingIds.current.delete(m.id));
        setIsTranslating(false);
      }
    };

    translate();
  }, [targetLanguage, events, translations]);

  const generateScheduleWithAI = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    try {
      const iconGlossaryEntries = Object.entries(iconGlossary).map(([k, v]) => `${k} -> ${v}`).join('\n');
      const iconGlossaryPrompt = iconGlossaryEntries ? `\nIMPORTANT: Use the following icon glossary to assign icons. If the activity matches the context, you MUST use the mapped icon:\n${iconGlossaryEntries}\n` : '';

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: `You are an expert schedule planner. Parse the following text and extract it into a structured daily schedule.

Input Text:
"""
${aiPrompt}
"""

Instructions:
1. Return a JSON array of objects representing the schedule blocks.
2. For each distinct event or block in the text, create exactly one object. DO NOT duplicate events unless they actually appear multiple times in the text. Ensure you capture the entire schedule from the text.
3. The 'type' can be 'event', 'h1', 'h2', 'h3', or 'comment'. Use 'h1'/'h2' for section headers and 'event' for actual activities.
4. The 'title' must be a clean, concise description of the activity. Keep the original language of the text.
5. The 'time' and 'endTime' must be STRICTLY in "HH:MM" format (e.g., "09:00", "13:30") or empty strings "". NEVER put words, extra text, or explanations in the time fields.
6. Choose a suitable 'icon' from: None, Briefcase, Coffee, Dumbbell, Book, Phone, Utensils, Moon, Sun, Car, ShoppingBag, Music, Heart, Trees, BatteryFull, Bed, Camera, Video, Football, Stadium, Plus, GripVertical, Trash2, Edit2, X, Calendar, Clock, ListOrdered, Copy, Sparkles, Languages, Loader2, Share2, ImageIcon, FileText, Download, ImagePlus.${iconGlossaryPrompt}`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING, enum: ['event', 'h1', 'h2', 'h3', 'comment'] },
                time: { type: Type.STRING, description: "Time strictly in HH:MM format (optional)" },
                endTime: { type: Type.STRING, description: "End time strictly in HH:MM format (optional)" },
                title: { type: Type.STRING, description: "Clean title of the event, no conversational text" },
                icon: { type: Type.STRING }
              },
              required: ['type', 'title', 'icon']
            }
          }
        }
      });

      const generatedData = JSON.parse(response.text || '[]');
      const newEvents = generatedData.map((item: any) => ({
        id: crypto.randomUUID(),
        type: item.type,
        time: item.time || '',
        endTime: item.endTime || '',
        title: item.title,
        icon: item.icon,
        color: 'white'
      }));

      setEvents(newEvents);
      setIsAiModalOpen(false);
      setAiPrompt('');
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert("Ошибка при генерации расписания.");
    } finally {
      setIsGenerating(false);
    }
  };

  const openAddModal = () => {
    setEditingEvent(null);
    setType('event');
    setTime('');
    setEndTime('');
    setTitle('');
    setIcon('None');
    setColor('white');
    setIsModalOpen(true);
  };

  const openEditModal = (event: DayEvent) => {
    setEditingEvent(event);
    setType(event.type || 'event');
    setTime(event.time || '');
    setEndTime(event.endTime || '');
    setTitle(event.title);
    setIcon(event.icon);
    setColor(event.color || 'white');
    setIsModalOpen(true);
  };

  const saveEvent = () => {
    if (!title.trim()) return;

    const newEvent: DayEvent = {
      id: editingEvent ? editingEvent.id : crypto.randomUUID(),
      type,
      time: time || undefined,
      endTime: endTime || undefined,
      title: title.trim(),
      icon,
      color
    };

    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? newEvent : e));
    } else {
      // Add new event
      setEvents([...events, newEvent]);
    }
    setIsModalOpen(false);
  };

  const deleteEvent = (id: string) => {
    setIsDeleting(true);
    setEvents(events.filter(e => e.id !== id));
    setTimeout(() => setIsDeleting(false), 150);
  };

  const duplicateEvent = (eventToCopy: DayEvent) => {
    const newEvent = { ...eventToCopy, id: crypto.randomUUID() };
    const index = events.findIndex(e => e.id === eventToCopy.id);
    if (index !== -1) {
      const newEvents = [...events];
      newEvents.splice(index + 1, 0, newEvent);
      setEvents(newEvents);
    } else {
      setEvents([...events, newEvent]);
    }
  };

  const sortByTime = () => {
    const sorted = [...events].sort((a, b) => {
      if (!a.time && !b.time) return 0;
      if (!a.time) return -1;
      if (!b.time) return 1;
      return a.time.localeCompare(b.time);
    });
    setEvents(sorted);
  };

  const clearEvents = () => {
    if (window.confirm("Вы уверены, что хотите очистить всё расписание?")) {
      setEvents([]);
    }
  };

  const exportAsImage = async () => {
    if (!scheduleRef.current) return;
    setIsExporting(true);
    setIsExportMenuOpen(false);
    await new Promise(resolve => setTimeout(resolve, 600));
    try {
      const dataUrl = await toPng(scheduleRef.current, { pixelRatio: 2, backgroundColor: '#ffffff' });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "schedule.png";
      link.click();
    } catch (e) {
      console.error(e);
      alert("Ошибка при сохранении картинки");
    } finally {
      setIsExporting(false);
    }
  };

  const exportAsPDF = async () => {
    if (!scheduleRef.current) return;
    setIsExporting(true);
    setIsExportMenuOpen(false);
    await new Promise(resolve => setTimeout(resolve, 600));
    try {
      const dataUrl = await toPng(scheduleRef.current, { pixelRatio: 2, backgroundColor: '#ffffff' });
      const width = scheduleRef.current.offsetWidth;
      const height = scheduleRef.current.offsetHeight;
      const pdf = new jsPDF({
        orientation: width > height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [width, height]
      });
      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
      pdf.save("schedule.pdf");
    } catch (e) {
      console.error(e);
      alert("Ошибка при сохранении PDF");
    } finally {
      setIsExporting(false);
    }
  };

  const shareSchedule = async () => {
    if (!scheduleRef.current) return;
    setIsExportMenuOpen(false);
    setIsExporting(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    try {
      const dataUrl = await toPng(scheduleRef.current, { pixelRatio: 2, backgroundColor: '#ffffff' });
      const text = events.map(e => {
        const timeStr = e.time ? `${e.time}${e.endTime ? ` - ${e.endTime}` : ''}` : '';
        return `${timeStr ? `[${timeStr}] ` : ''}${e.title}`;
      }).join('\n');

      if (navigator.share) {
        try {
          const blob = await (await fetch(dataUrl)).blob();
          const file = new File([blob], 'schedule.png', { type: 'image/png' });
          
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: 'Мой план на день',
              text: text,
              files: [file]
            });
          } else {
            await navigator.share({
              title: 'Мой план на день',
              text: text,
            });
          }
        } catch (err) {
          console.error('Share failed:', err);
        }
      } else {
        navigator.clipboard.writeText(text);
        alert('Расписание скопировано в буфер обмена!');
      }
    } catch (e) {
      console.error(e);
      alert("Ошибка при шейринге");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar size={24} className="text-indigo-600" />
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={undo}
              disabled={pastEvents.length === 0}
              className={`p-2 rounded-lg transition-colors ${pastEvents.length > 0 ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}
              title="Отменить"
            >
              <Undo2 size={20} />
            </button>
            <button
              onClick={redo}
              disabled={futureEvents.length === 0}
              className={`p-2 rounded-lg transition-colors ${futureEvents.length > 0 ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}
              title="Вернуть"
            >
              <Redo2 size={20} />
            </button>
            <button
              onClick={clearEvents}
              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              title="Очистить"
            >
              <Trash2 size={20} />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <button
              onClick={openAddModal}
              className="p-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
              title="Добавить"
            >
              <Plus size={24} />
            </button>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors ml-1"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay & Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100"
            >
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                <h2 className="text-xl font-bold text-gray-900">Меню</h2>
                <button 
                  onClick={() => setIsSidebarOpen(false)} 
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 flex-1 flex flex-col gap-4">
                
                {/* Main Actions */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setIsSidebarOpen(false); setIsAiModalOpen(true); }} 
                    className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-xl font-medium transition-colors text-sm text-center"
                  >
                    <Sparkles size={18} /> ИИ
                  </button>
                  <button 
                    onClick={() => { setIsSidebarOpen(false); setIsTemplatesModalOpen(true); }} 
                    className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-3 rounded-xl font-medium transition-colors text-sm text-center"
                  >
                    <LayoutTemplate size={18} /> Шаблоны
                  </button>
                </div>

                {/* Translation Settings */}
                <div className="space-y-2">
                  <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest pl-1">Перевод</h3>
                  <div className="bg-gray-50 p-3 rounded-xl space-y-2">
                    <select
                      value={targetLanguage}
                      onChange={(e) => setTargetLanguage(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                    >
                      <option value="None">Без перевода</option>
                      <option value="English">Английский (EN)</option>
                      <option value="Spanish">Испанский (ES)</option>
                      <option value="French">Французский (FR)</option>
                      <option value="German">Немецкий (DE)</option>
                      <option value="Chinese">Китайский (ZH)</option>
                    </select>
                    <button
                      onClick={() => { setIsSidebarOpen(false); setIsGlossaryModalOpen(true); }}
                      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
                    >
                      <Book size={16} /> Настроить глоссарий
                    </button>
                  </div>
                </div>

                {/* Edit Controls */}
                <div className="space-y-2">
                  <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest pl-1">Управление</h3>
                  <button 
                    onClick={() => { setIsSidebarOpen(false); sortByTime(); }} 
                    className="w-full flex items-center justify-center gap-2 p-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <ArrowDownNarrowWide size={18} className="text-gray-500" />
                    Сортировать по времени
                  </button>
                </div>

                {/* Export Options */}
                <div className="space-y-2">
                  <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest pl-1">Сохранить</h3>
                  {isExporting ? (
                    <div className="flex items-center justify-center p-3 text-gray-500 bg-gray-50 rounded-xl">
                      <Loader2 size={24} className="animate-spin" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <select
                        value={exportLayout}
                        onChange={(e) => setExportLayout(e.target.value as any)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                      >
                        <option value="mobile">Узкий (Телефон)</option>
                        <option value="desktop">Широкий (ПК)</option>
                        <option value="auto">По ширине текста</option>
                      </select>
                      <div className="flex gap-2 pt-1">
                        <button 
                          onClick={() => { setIsSidebarOpen(false); exportAsImage(); }} 
                          className="flex-1 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center gap-2 transition-colors"
                          title="PNG"
                        >
                          <ImageIcon size={18} className="text-gray-500" />
                        </button>
                        <button 
                          onClick={() => { setIsSidebarOpen(false); exportAsPDF(); }} 
                          className="flex-1 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center gap-2 transition-colors"
                          title="PDF"
                        >
                          <FileText size={18} className="text-gray-500" />
                        </button>
                        <button 
                          onClick={() => { setIsSidebarOpen(false); shareSchedule(); }} 
                          className="flex-1 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center gap-2 transition-colors"
                          title="Поделиться"
                        >
                          <Share2 size={18} className="text-gray-500" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 mt-8">
        {events.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Calendar size={32} />
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Нет событий</h2>
            <p className="text-gray-500 mb-6">Ваше расписание на сегодня пусто.</p>
            <button
              onClick={openAddModal}
              className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
            >
              <Plus size={18} />
              Создать первое событие
            </button>
          </div>
        ) : (
          <div className="-mx-4 sm:-mx-6 overflow-x-auto">
            <div 
              ref={scheduleRef}
              className="bg-white p-4 sm:p-6 pb-8 sm:pb-12 mx-auto"
              style={isExporting ? (
                exportLayout === 'mobile' ? { width: '400px', minWidth: '400px' } :
                exportLayout === 'desktop' ? { width: '800px', minWidth: '800px' } :
                { width: 'max-content', minWidth: '100%', paddingRight: '40px' }
              ) : undefined}
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1 pt-2">
                  {isExporting ? (
                    scheduleTitle && (
                      <div className="w-full text-2xl sm:text-3xl font-bold text-gray-900 break-words whitespace-pre-wrap">
                        {scheduleTitle}
                      </div>
                    )
                  ) : (
                    <textarea
                      value={scheduleTitle}
                      onChange={(e) => {
                        setScheduleTitle(e.target.value);
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                      }}
                      placeholder="Заголовок расписания..."
                      className="w-full text-2xl sm:text-3xl font-bold text-gray-900 bg-transparent border-none outline-none focus:ring-0 p-0 resize-none overflow-hidden"
                      rows={1}
                    />
                  )}
                </div>
                <div className="flex-shrink-0">
                  {logoUrl ? (
                    <div className="relative group inline-block">
                      <img src={logoUrl} alt="Логотип" className="h-16 w-auto object-contain" />
                      {!isExporting && (
                        <button
                          onClick={() => setLogoUrl(null)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                          title="Удалить логотип"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                  ) : !isExporting ? (
                    <label className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-2 text-gray-400 hover:text-indigo-500 hover:border-indigo-400 hover:bg-indigo-50 transition-all h-16 w-32 group">
                      <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                      <div className="flex flex-col items-center gap-1">
                        <ImagePlus size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">Логотип</span>
                      </div>
                    </label>
                  ) : null}
                </div>
              </div>
              <Reorder.Group axis="y" values={events} onReorder={setEvents} className="space-y-0">
                <AnimatePresence initial={false}>
                  {events.map((event) => (
                    <EventItem
                      key={event.id}
                      event={event}
                      translation={translations[event.id]}
                      isExporting={isExporting}
                      exportLayout={exportLayout}
                      isDeleting={isDeleting}
                      onEdit={openEditModal}
                      onCopy={duplicateEvent}
                      onDelete={deleteEvent}
                    />
                  ))}
                </AnimatePresence>
              </Reorder.Group>
              {!isExporting && (
                <button
                  onClick={openAddModal}
                  title="Добавить событие"
                  className="mt-4 w-full py-4 rounded-2xl border-2 border-dashed border-gray-300 text-gray-400 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 flex items-center justify-center transition-colors group"
                >
                  <Plus size={24} className="group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Templates Modal */}
      <AnimatePresence>
        {isTemplatesModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsTemplatesModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2 text-indigo-700">
                  <LayoutTemplate size={20} />
                  <h2 className="text-xl font-bold text-gray-900">Шаблоны</h2>
                </div>
                <button
                  onClick={() => setIsTemplatesModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                <div className="mb-6 space-y-3 shrink-0">
                  <h3 className="font-semibold text-gray-800 text-sm">Сохранить текущее расписание</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      placeholder="Название шаблона..."
                      value={newTemplateName}
                      onChange={e => setNewTemplateName(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && saveAsTemplate()}
                    />
                    <button
                      onClick={saveAsTemplate}
                      disabled={!newTemplateName.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl font-medium transition-colors whitespace-nowrap flex items-center gap-2"
                    >
                      <Save size={16} /> Сохранить
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 text-sm">Ваши шаблоны</h3>
                  {templates.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <LayoutTemplate size={48} className="mx-auto mb-3 opacity-20" />
                      <p>У вас еще нет сохраненных шаблонов</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {templates.map(template => (
                        <div key={template.id} className="group border border-gray-100 bg-gray-50 rounded-xl p-3 flex flex-col gap-2 hover:border-indigo-200 transition-colors">
                          <div className="flex items-center gap-3">
                            {editingTemplateId === template.id ? (
                              <input
                                autoFocus
                                type="text"
                                className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-indigo-500"
                                value={editingTemplateName}
                                onChange={e => setEditingTemplateName(e.target.value)}
                                onKeyDown={e => {
                                  if (e.key === 'Enter' && editingTemplateName.trim()) {
                                    updateTemplate(template.id, editingTemplateName.trim());
                                    setEditingTemplateId(null);
                                  } else if (e.key === 'Escape') {
                                    setEditingTemplateId(null);
                                  }
                                }}
                                onBlur={() => {
                                  if (editingTemplateName.trim()) {
                                    updateTemplate(template.id, editingTemplateName.trim());
                                  }
                                  setEditingTemplateId(null);
                                }}
                              />
                            ) : (
                              <span className="flex-1 font-medium text-gray-800 truncate" onDoubleClick={() => {
                                setEditingTemplateId(template.id);
                                setEditingTemplateName(template.name);
                              }}>{template.name}</span>
                            )}
                            <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shrink-0">
                              <button
                                onClick={() => loadTemplate(template)}
                                className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                title="Загрузить"
                              >
                                <FolderOpen size={16} />
                              </button>
                              <button
                                onClick={() => {
                                  setEditingTemplateId(template.id);
                                  setEditingTemplateName(template.name);
                                }}
                                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Переименовать"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => updateTemplate(template.id)}
                                className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                title="Обновить шаблон текущим расписанием"
                              >
                                <Save size={16} />
                              </button>
                              <button
                                onClick={() => deleteTemplate(template.id)}
                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Удалить"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            Событий: {template.events.length}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Glossary Modal */}
      <AnimatePresence>
        {isGlossaryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsGlossaryModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Book size={20} />
                  <h2 className="text-xl font-bold text-gray-900">Глоссарий</h2>
                </div>
                <button
                  onClick={() => setIsGlossaryModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex border-b border-gray-100 bg-gray-50/50">
                <button
                  onClick={() => setActiveGlossaryTab('translate')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeGlossaryTab === 'translate' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  Слова
                </button>
                <button
                  onClick={() => setActiveGlossaryTab('icons')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeGlossaryTab === 'icons' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  Иконки
                </button>
              </div>

              <div className="flex-1 p-6 overflow-y-auto min-h-0">
                {activeGlossaryTab === 'translate' ? (
                  <>
                    <p className="text-sm text-gray-500 mb-6">
                      Задайте как ИИ должен переводить определенные слова (например: «зал» → «gym»).
                    </p>

                    <div className="space-y-3">
                      {Object.entries(glossary).length === 0 ? (
                        <div className="text-center py-6 text-sm text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                          Словарь пуст
                        </div>
                      ) : (
                        Object.entries(glossary).map(([term, translation]) => (
                          <div key={term} className="flex flex-wrap items-center justify-between gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">{term}</span>
                              <span className="text-gray-400">→</span>
                              <span className="text-indigo-600">{translation}</span>
                            </div>
                            <button
                              onClick={() => {
                                const next = { ...glossary };
                                delete next[term];
                                setGlossary(next);
                              }}
                              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Удалить"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                ) : (
                  <>
                     <p className="text-sm text-gray-500 mb-6">
                      Задайте какие иконки ИИ должен назначать на определенные события (например: «теория» → Камера).
                    </p>

                    <div className="space-y-3">
                      {Object.entries(iconGlossary).length === 0 ? (
                        <div className="text-center py-6 text-sm text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                          Словарь иконок пуст
                        </div>
                      ) : (
                        Object.entries(iconGlossary).map(([term, icon]) => {
                          const IconComponent = ICONS[icon as IconName];
                          return (
                          <div key={term} className="flex flex-wrap items-center justify-between gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">{term}</span>
                              <span className="text-gray-400">→</span>
                              <span className="text-indigo-600 flex items-center gap-2">{IconComponent ? <IconComponent size={16} /> : null} {icon}</span>
                            </div>
                            <button
                              onClick={() => {
                                const next = { ...iconGlossary };
                                delete next[term];
                                setIconGlossary(next);
                              }}
                              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Удалить"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        );
                        })
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="flex-none p-6 border-t border-gray-100 bg-gray-50">
                {activeGlossaryTab === 'translate' ? (
                  <>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Добавить в глоссарий перевода</h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="text"
                          placeholder="Оригинал (зал)"
                          value={newGlossaryTerm}
                          onChange={(e) => setNewGlossaryTerm(e.target.value)}
                          className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full"
                        />
                        <input
                          type="text"
                          placeholder="Перевод (gym)"
                          value={newGlossaryTranslation}
                          onChange={(e) => setNewGlossaryTranslation(e.target.value)}
                          className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full"
                        />
                      </div>
                      <button
                        disabled={!newGlossaryTerm.trim() || !newGlossaryTranslation.trim()}
                        onClick={() => {
                          setGlossary({ ...glossary, [newGlossaryTerm.trim()]: newGlossaryTranslation.trim() });
                          setNewGlossaryTerm('');
                          setNewGlossaryTranslation('');
                        }}
                        className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                      >
                        Добавить
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Добавить контекст иконки</h3>
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Контекст (теория)"
                        value={newIconGlossaryTerm}
                        onChange={(e) => setNewIconGlossaryTerm(e.target.value)}
                        className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full"
                      />
                      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                        {(Object.keys(ICONS) as IconName[]).map((iconName) => {
                          const IconComp = ICONS[iconName];
                          const isSelected = newIconGlossaryIcon === iconName;
                          return (
                            <button
                              key={iconName}
                              onClick={() => setNewIconGlossaryIcon(iconName)}
                              title={iconName}
                              className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-indigo-100 text-indigo-600 ring-2 ring-indigo-500 ring-offset-1'
                                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200'
                              }`}
                            >
                              {IconComp ? <IconComp size={18} /> : null}
                            </button>
                          );
                        })}
                      </div>
                      
                      <button
                        disabled={!newIconGlossaryTerm.trim()}
                        onClick={() => {
                          setIconGlossary({ ...iconGlossary, [newIconGlossaryTerm.trim()]: newIconGlossaryIcon });
                          setNewIconGlossaryTerm('');
                        }}
                        className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                      >
                        Добавить
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* AI Modal */}
      <AnimatePresence>
        {isAiModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => !isGenerating && setIsAiModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles size={20} />
                  <h2 className="text-xl font-bold text-gray-900">ИИ Расписание</h2>
                </div>
                <button
                  onClick={() => !isGenerating && setIsAiModalOpen(false)}
                  disabled={isGenerating}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Опишите ваш день текстом
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Например: Завтрак в 9:00, потом в 10:00 созвон с командой. В 13:00 обед, а вечером в 19:00 тренировка."
                  className="w-full h-32 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none"
                  disabled={isGenerating}
                  autoFocus
                />
              </div>

              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                <button
                  onClick={() => setIsAiModalOpen(false)}
                  disabled={isGenerating}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 bg-gray-100 rounded-xl transition-colors disabled:opacity-50"
                >
                  Отмена
                </button>
                <button
                  onClick={generateScheduleWithAI}
                  disabled={!aiPrompt.trim() || isGenerating}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-sm shadow-purple-200"
                >
                  {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                  Сгенерировать
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingEvent ? 'Редактировать событие' : 'Новое событие'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="space-y-5">
                  {/* Block Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Тип блока</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'event', label: 'Событие' },
                        { id: 'h1', label: 'Заголовок 1' },
                        { id: 'h2', label: 'Заголовок 2' },
                        { id: 'h3', label: 'Заголовок 3' },
                        { id: 'comment', label: 'Комментарий' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setType(t.id as BlockType)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            type === t.id
                              ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500 ring-offset-1'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time & Title */}
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <div className="w-24">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Начало</label>
                        <div className="relative">
                          <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="w-24">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Конец</label>
                        <div className="relative">
                          <input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Название</label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Например, Завтрак"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Icon Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Иконка</label>
                    <div className="grid grid-cols-6 gap-2 sm:gap-3">
                      {(Object.keys(ICONS) as IconName[]).map((iconName) => {
                        const IconComp = ICONS[iconName];
                        const isSelected = icon === iconName;
                        return (
                          <button
                            key={iconName}
                            onClick={() => setIcon(iconName)}
                            className={`aspect-square rounded-xl flex items-center justify-center transition-all ${
                              isSelected
                                ? 'bg-indigo-100 text-indigo-600 ring-2 ring-indigo-500 ring-offset-1'
                                : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200'
                            }`}
                            title={iconName}
                          >
                            {IconComp ? <IconComp size={20} /> : <span className="text-xs font-medium">Нет</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">Цвет карточки</label>
                    <div className="flex flex-wrap gap-3 pb-1">
                      {COLORS.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setColor(c.id)}
                          className={`w-8 h-8 rounded-full border ${c.bg} ${c.border} transition-transform ${
                            color === c.id ? 'scale-110 ring-2 ring-indigo-500 ring-offset-2' : 'hover:scale-105'
                          }`}
                          title={c.label}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 sticky bottom-0">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 bg-gray-100 rounded-xl transition-colors"
                >
                  Отмена
                </button>
                <button
                  onClick={saveEvent}
                  disabled={!title.trim()}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-sm shadow-indigo-200"
                >
                  Сохранить
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
