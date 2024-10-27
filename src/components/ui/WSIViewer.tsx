"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, ZoomOut, Move, Download, Share2, Printer, RotateCcw, Settings, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WSIViewer = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const handleMouseDown = (e: { clientX: number; clientY: number; }) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50 p-8 transition-all duration-300">
      {/* Left Panel - Cell Details */}
      <div className="w-80 mr-8 space-y-6">
        <Card className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl border-0 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-6 text-slate-800">Sample Analysis</h2>
            
            {/* RBC Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-rose-400 pl-4 py-2 transition-all duration-300 hover:border-rose-500">
                <h3 className="font-semibold text-slate-700 mb-3">Red Blood Cells</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="col-span-2 text-slate-600">Applied Cells</div>
                  <div className="text-right font-medium text-slate-800">222 <span className="text-slate-500">(67%)</span></div>
                  <div className="col-span-2 text-slate-600">Borderline Dyschromia</div>
                  <div className="text-right font-medium text-slate-800">45 <span className="text-slate-500">(20%)</span></div>
                  <div className="col-span-2 text-slate-600">Burr Cells</div>
                  <div className="text-right font-medium text-slate-800">78 <span className="text-slate-500">(34%)</span></div>
                </div>
              </div>

              {/* WBC Section */}
              <div className="border-l-4 border-blue-400 pl-4 py-2 transition-all duration-300 hover:border-blue-500">
                <h3 className="font-semibold text-slate-700 mb-3">White Blood Cells</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="col-span-2 text-slate-600">Basophil</div>
                  <div className="text-right font-medium text-slate-800">222 <span className="text-slate-500">(67%)</span></div>
                  <div className="col-span-2 text-slate-600">Eosinophil</div>
                  <div className="text-right font-medium text-slate-800">50 <span className="text-slate-500">(20%)</span></div>
                  <div className="col-span-2 text-slate-600">Lymphocyte</div>
                  <div className="text-right font-medium text-slate-800">67 <span className="text-slate-500">(34%)</span></div>
                </div>
              </div>

              {/* Platelets Section */}
              <div className="border-l-4 border-emerald-400 pl-4 py-2 transition-all duration-300 hover:border-emerald-500">
                <h3 className="font-semibold text-slate-700 mb-3">Platelets</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="col-span-2 text-slate-600">Count</div>
                  <div className="text-right font-medium text-slate-800">222</div>
                  <div className="col-span-2 text-slate-600">Percentage</div>
                  <div className="text-right font-medium text-slate-800">222</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col space-y-6">
        {/* Top Navigation Bar */}
        <Card className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-slate-50 rounded-lg p-1.5 shadow-sm">
                  <Button variant="ghost" size="icon" onClick={handleZoomIn} className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <ZoomIn className="h-4 w-4 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleZoomOut} className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <ZoomOut className="h-4 w-4 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <Move className="h-4 w-4 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <Search className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>

                <div className="h-8 w-px bg-slate-200" />

                <div className="bg-slate-50 rounded-lg p-1.5 shadow-sm">
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <RotateCcw className="h-4 w-4 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <Settings className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-slate-600">
                  Zoom: {(scale * 100).toFixed(0)}%
                </span>
                <div className="h-8 w-px bg-slate-200" />
                <div className="bg-slate-50 rounded-lg p-1.5 shadow-sm">
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <Download className="h-4 w-4 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <Share2 className="h-4 w-4 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white hover:shadow-sm transition-all duration-200">
                    <Printer className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Image Viewer */}
        <Card className="flex-1 relative overflow-hidden bg-white/90 backdrop-blur-xl shadow-xl rounded-xl border-0">
          <div
            className="absolute inset-0 bg-slate-50/50"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            <div style={{
              transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              transformOrigin: '0 0',
              position: 'relative',
              width: '100%',
              height: '100%'
            }}>
              <Image
                src="/wsi.png"
                alt="Whole Slide Image"
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-150"
              />
            </div>
          </div>
        </Card>

        {/* Bottom Panel */}
        <Card className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl border-0">
          <CardContent className="p-6 flex justify-between items-center">
            <div className="text-sm font-medium text-slate-600">
              Patient ID: <span className="text-slate-800">12345</span> • 
              Date: <span className="text-slate-800">2024-10-24</span> • 
              Slide: <span className="text-slate-800">WSI-001</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Thumbnail */}
      <div className="w-80 ml-8 space-y-6">
        <Card className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl border-0 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Overview</h3>
            <div className="aspect-square bg-slate-50 rounded-xl overflow-hidden shadow-inner relative">
              <Image
                src="/wsi.png"
                alt="WSI Thumbnail"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Magnification</span>
                <span className="font-medium text-slate-800">40x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Resolution</span>
                <span className="font-medium text-slate-800">1920 x 1080</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">File Size</span>
                <span className="font-medium text-slate-800">2.4 GB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WSIViewer;
