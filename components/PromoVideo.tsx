import React from 'react';
import { Player } from '@remotion/player';
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

// --- Remotion Components ---

const Title: React.FC<{ title: string; color: string; top?: number }> = ({ title, color, top = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const translateY = spring({ frame, fps, to: 0, from: 50, config: { damping: 12 } });

  return (
    <div style={{ 
      position: 'absolute', 
      top: `${30 + top}%`, 
      width: '100%', 
      textAlign: 'center', 
      opacity, 
      transform: `translateY(${translateY}px)` 
    }}>
      <h1 style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '80px', 
        fontWeight: 'bold', 
        color: color,
        textShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        {title}
      </h1>
    </div>
  );
};

const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{
      position: 'absolute',
      top: '55%',
      width: '100%',
      textAlign: 'center',
      opacity
    }}>
      <h2 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '40px',
        color: '#475569',
        fontWeight: 500
      }}>
        {text}
      </h2>
    </div>
  );
};

const LogoAnimation: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    
    const scale = spring({ frame, fps, from: 0, to: 1, config: { stiffness: 100 } });
    const rotate = spring({ frame, fps, from: -180, to: 0, config: { damping: 15 } });

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ 
                width: 150, 
                height: 150, 
                backgroundColor: '#0284c7', 
                borderRadius: '20%', 
                transform: `scale(${scale}) rotate(${rotate}deg)`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 50px rgba(2, 132, 199, 0.3)'
            }}>
                <div style={{ width: 80, height: 80, backgroundColor: 'white', borderRadius: '10px', transform: 'rotate(45deg)' }}></div>
            </div>
        </AbsoluteFill>
    );
};

// --- Main Composition ---

const ViniThrivePromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      
      {/* Scene 1: Introduction */}
      <Sequence from={0} durationInFrames={70}>
        <Title title="ViniThrive" color="#0f172a" />
        <Subtitle text="Global Sourcing Partner" />
      </Sequence>

      {/* Scene 2: Cost Optimization */}
      <Sequence from={70} durationInFrames={70}>
         <AbsoluteFill style={{ backgroundColor: '#f0f9ff' }}>
            <Title title="Reduce Costs" color="#0284c7" />
            <Subtitle text="Up to 30% Savings" />
         </AbsoluteFill>
      </Sequence>

      {/* Scene 3: Logistics */}
      <Sequence from={140} durationInFrames={70}>
        <AbsoluteFill style={{ backgroundColor: '#f8fafc' }}>
             <Title title="Fast Delivery" color="#059669" />
             <Subtitle text="End-to-End Logistics" />
        </AbsoluteFill>
      </Sequence>

       {/* Scene 4: Logo End */}
       <Sequence from={210} durationInFrames={90}>
            <LogoAnimation />
            <Title title="Start Today" color="#0f172a" top={25} />
       </Sequence>

    </AbsoluteFill>
  );
};

// --- Website Section Component ---

const PromoVideo: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">See Us In Motion</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Driven by Technology</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                We use cutting-edge tech not just for sourcing, but to demonstrate our capabilities. 
                This video is generated programmatically using React & Remotion.
            </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
            <Player
                component={ViniThrivePromo}
                durationInFrames={300}
                compositionWidth={1280}
                compositionHeight={720}
                fps={30}
                controls
                style={{
                    width: '100%',
                    aspectRatio: '16/9',
                }}
                loop
            />
        </div>
        
        <div className="text-center mt-6">
            <p className="text-xs text-slate-400">
                * This video is rendered in real-time using @remotion/player.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;