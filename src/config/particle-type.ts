import { RecursivePartial } from 'tsparticles-engine';

interface ParticleConfig {
  autoPlay?: boolean;
  background?: RecursivePartial<Background>;
  backgroundMask?: RecursivePartial<BackgroundMask>;
  clear?: boolean;
  defaultThemes?: DefaultThemes;
  delay?: number;
  fullScreen?: RecursivePartial<FullScreen>;
  detectRetina?: boolean;
  duration?: number;
  fpsLimit?: number;
  interactivity?: RecursivePartial<Interactivity>;
  manualParticles?: never[];
  particles?: RecursivePartial<PaticleConfigParticles>;
  pauseOnBlur?: boolean;
  pauseOnOutsideViewport?: boolean;
  responsive?: never[];
  smooth?: boolean;
  style?: DefaultThemes;
  themes?: never[];
  zLayers?: number;
  emitters?: never[];
  motion?: RecursivePartial<Motion>;
}

interface Background {
  color?: StartClass;
  image?: string;
  position?: string;
  repeat?: string;
  size?: string;
  opacity?: number;
}

interface StartClass {
  value?: string;
}

interface BackgroundMask {
  composite?: GlobalCompositeOperation | string;
  cover?: Cover;
  enable?: boolean;
}

interface Cover {
  color?: StartClass;
  opacity?: number;
}

interface DefaultThemes {}

interface FullScreen {
  enable?: boolean;
  zIndex?: number;
}

interface Interactivity {
  detectsOn?: string;
  events?: Events;
  modes?: Modes;
}

interface Events {
  onClick?: OnClick;
  onDiv?: OnDiv;
  onHover?: OnHover;
  resize?: Resize;
}

interface OnClick {
  enable?: boolean;
  mode?: never[];
}

interface OnDiv {
  selectors?: never[];
  enable?: boolean;
  mode?: never[];
  type?: string;
}

interface OnHover {
  enable?: boolean;
  mode?: string;
  parallax?: Parallax;
}

interface Parallax {
  enable?: boolean;
  force?: number;
  smooth?: number;
}

interface Resize {
  delay?: number;
  enable?: boolean;
}

interface Modes {
  trail?: ModesTrail;
  attract?: RepulseClass;
  bounce?: ModesBounce;
  bubble?: Bubble;
  connect?: Connect;
  grab?: Grab;
  push?: Push;
  remove?: Remove;
  repulse?: RepulseClass;
  slow?: Slow;
  light?: Light;
}

interface RepulseClass {
  distance?: number;
  duration?: number;
  easing?: string;
  factor?: number;
  maxSpeed?: number;
  speed?: number;
  divs?: RepulseClass;
  selectors?: never[];
}

interface ModesBounce {
  distance?: number;
}

interface Bubble {
  distance?: number;
  duration?: number;
  mix?: boolean;
  divs?: Bubble;
  selectors?: never[];
}

interface Connect {
  distance?: number;
  links?: ConnectLinks;
  radius?: number;
}

interface ConnectLinks {
  opacity?: number;
}

interface Grab {
  distance?: number;
  links?: GrabLinks;
}

interface GrabLinks {
  blink?: boolean;
  consent?: boolean;
  opacity?: number;
}

interface Light {
  area?: Area;
  shadow?: LightShadow;
}

interface Area {
  gradient?: Gradient;
  radius?: number;
}

interface Gradient {
  start?: StartClass;
  stop?: StartClass;
}

interface LightShadow {
  color?: StartClass;
  length?: number;
}

interface Push {
  default?: boolean;
  groups?: never[];
  quantity?: number;
}

interface Remove {
  quantity?: number;
}

interface Slow {
  factor?: number;
  radius?: number;
}

interface ModesTrail {
  delay?: number;
  pauseOnStop?: boolean;
  quantity?: number;
  particles?: TrailParticles;
}

interface TrailParticles {
  color?: PurpleColor;
  collisions?: LinksClass;
  links?: LinksClass;
  move?: PurpleMove;
  size?: Size;
}

interface LinksClass {
  enable?: boolean;
}

interface PurpleColor {
  value?: string;
  animation?: RotateAnimation;
}

interface RotateAnimation {
  enable?: boolean;
  speed?: number;
  sync?: boolean;
  decay?: number;
}

interface PurpleMove {
  outModes?: PurpleOutModes;
  speed?: number;
}

interface PurpleOutModes {
  default?: string;
}

interface Size {
  value?: Value;
  animation?: PurpleAnimation;
}

interface PurpleAnimation {
  enable?: boolean;
  speed?: number;
  sync?: boolean;
  startValue?: string;
  destroy?: string;
}

interface Value {
  min?: number;
  max?: number;
}

interface Motion {
  disable?: boolean;
  reduce?: Reduce;
}

interface Reduce {
  factor?: number;
  value?: boolean;
}

interface PaticleConfigParticles {
  bounce?: ParticlesBounce;
  collisions?: PurpleCollisions;
  color?: FluffyColor;
  effect?: Effect;
  groups?: DefaultThemes;
  move?: FluffyMove;
  number?: MyNumber;
  opacity?: Opacity;
  reduceDuplicates?: boolean;
  shadow?: LinksShadow;
  shape?: Shape;
  size?: Opacity;
  stroke?: Stroke;
  zIndex?: ZIndex;
  destroy?: Destroy;
  roll?: Roll;
  tilt?: Rotate;
  twinkle?: Twinkle;
  wobble?: Wobble;
  life?: Life;
  rotate?: Rotate;
  orbit?: Orbit;
  links?: ParticlesLinks;
  repulse?: Repulse;
}

interface ParticlesBounce {
  horizontal?: Horizontal;
  vertical?: Horizontal;
}

interface Horizontal {
  value?: number;
}

interface PurpleCollisions {
  absorb?: Absorb;
  bounce?: ParticlesBounce;
  enable?: boolean;
  maxSpeed?: number;
  mode?: string;
  overlap?: Overlap
}

interface Absorb {
  speed?: number;
}

interface Overlap {
  enable?: boolean;
  retries?: number;
}

interface FluffyColor {
  value?: string;
  animation?: FluffyAnimation;
}

interface FluffyAnimation {
  h?: HClass;
  s?: HClass;
  l?: HClass;
}

interface HClass {
  count?: number;
  enable?: boolean;
  speed?: number;
  decay?: number;
  delay?: number;
  sync?: boolean;
  offset?: number;
}

interface Destroy {
  bounds?: DefaultThemes;
  mode?: string;
  split?: Split;
}

interface Split {
  count?: number;
  factor?: Horizontal;
  rate?: Rate;
  sizeOffset?: boolean;
  particles?: DefaultThemes;
}

interface Rate {
  value?: Value;
}

interface Effect {
  close?: boolean;
  fill?: boolean;
  options?: DefaultThemes;
  type?: never[];
}

interface Life {
  count?: number;
  delay?: Delay;
  duration?: Delay;
}

interface Delay {
  value?: number;
  sync?: boolean;
}

interface ParticlesLinks {
  blink?: boolean;
  color?: StartClass;
  consent?: boolean;
  distance?: number;
  enable?: boolean;
  frequency?: number;
  opacity?: number;
  shadow?: LinksShadow;
  triangles?: Triangles;
  width?: number;
  warp?: boolean;
}

interface LinksShadow {
  blur?: number;
  color?: StartClass;
  enable?: boolean;
  offset?: Offset;
}

interface Offset {
  x?: number;
  y?: number;
}

interface Triangles {
  enable?: boolean;
  frequency?: number;
}

interface FluffyMove {
  angle?: Angle;
  attract?: MoveAttract;
  center?: Center;
  decay?: number;
  distance?: DefaultThemes;
  direction?: string;
  drift?: number;
  enable?: boolean;
  gravity?: Gravity;
  path?: Path;
  outModes?: FluffyOutModes;
  random?: boolean;
  size?: boolean;
  speed?: number;
  spin?: Spin;
  straight?: boolean;
  trail?: MoveTrail;
  vibrate?: boolean;
  warp?: boolean;
}

interface Angle {
  offset?: number;
  value?: number;
}

interface MoveAttract {
  distance?: number;
  enable?: boolean;
  rotate?: Offset;
}

interface Center {
  x?: number;
  y?: number;
  mode?: string;
  radius?: number;
}

interface Gravity {
  acceleration?: number;
  enable?: boolean;
  inverse?: boolean;
  maxSpeed?: number;
}

interface FluffyOutModes {
  default?: string;
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
}

interface Path {
  clamp?: boolean;
  delay?: Horizontal;
  enable?: boolean;
  options?: DefaultThemes;
}

interface Spin {
  acceleration?: number;
  enable?: boolean;
}

interface MoveTrail {
  enable?: boolean;
  length?: number;
  fill?: DefaultThemes;
}

interface MyNumber {
  density?: Density;
  limit?: Limit;
  value?: number;
}

interface Density {
  enable?: boolean;
  width?: number;
  height?: number;
}

interface Limit {
  mode?: string;
  value?: number;
}

interface Opacity {
  value?: Value;
  animation?: OpacityAnimation;
}

interface OpacityAnimation {
  count?: number;
  enable?: boolean;
  speed?: number;
  decay?: number;
  delay?: number;
  sync?: boolean;
  mode?: string;
  startValue?: string;
  destroy?: string;
}

interface Orbit {
  animation?: HClass;
  enable?: boolean;
  opacity?: number;
  rotation?: Horizontal;
  width?: number;
}

interface Repulse {
  value?: number;
  enabled?: boolean;
  distance?: number;
  duration?: number;
  factor?: number;
  speed?: number;
}

interface Roll {
  darken?: Darken;
  enable?: boolean;
  enlighten?: Darken;
  mode?: string;
  speed?: number;
}

interface Darken {
  enable?: boolean;
  value?: number;
}

interface Rotate {
  value?: number;
  animation?: RotateAnimation;
  direction?: string;
  path?: boolean;
  enable?: boolean;
}

interface Shape {
  close?: boolean;
  fill?: boolean;
  options?: DefaultThemes;
  type?: string;
}

interface Stroke {
  width?: number;
}

interface Twinkle {
  lines?: Lines;
  particles?: Lines;
}

interface Lines {
  enable?: boolean;
  frequency?: number;
  opacity?: number;
}

interface Wobble {
  distance?: number;
  enable?: boolean;
  speed?: Speed;
}

interface Speed {
  angle?: number;
  move?: number;
}

interface ZIndex {
  value?: number;
  opacityRate?: number;
  sizeRate?: number;
  velocityRate?: number;
}

export  type {
  ParticleConfig,
  Background,
  StartClass,
  BackgroundMask,
  Cover,
  DefaultThemes,
  FullScreen,
  Interactivity
}
