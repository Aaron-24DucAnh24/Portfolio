import { RefObject, useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '@/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CONTROL_KEY } from './enums';

// USE RUN ONCE
export const useRunOnce = (action: () => any) => {
  const triggered = useRef<boolean>(false);

  useEffect(() => {
    const hasBeenTriggered = triggered.current;
    if (!hasBeenTriggered) {
      action();
      triggered.current = true;
    }
  }, [action]);

  return null;
};

// USE CLICK OUTSIDE
export const useClickOutside = (
  action: () => void,
  dependencyList: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const handler = async (event: MouseEvent) => {
      const isOutSide = dependencyList.every(ref =>
        ref.current && !ref.current.contains(event.target as HTMLElement)
      );
      isOutSide && action();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
};

// REDUX - USE APP DISPATCH
export const useAppDispatch = () => useDispatch<AppDispatch>();

// REDUX - USE APP SELECTOR
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// USE CATCH KEY PRESS
export const useCatchKeyPress = (
  action: () => void,
  controlKey: CONTROL_KEY,
  actionKey: string,
) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== actionKey) return;
      e.preventDefault();

      switch (controlKey) {
        case CONTROL_KEY.ALT:
          e.altKey && action();
          break;

        case CONTROL_KEY.CTRL:
          e.ctrlKey && action();
          break;

        case CONTROL_KEY.SHIFT:
          e.shiftKey && action();
          break;

        default:
          e.metaKey && action();
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
};

// USE HOVER STATE
export const useHoverState = () => {
  const [isHover, setIsHover] = useState(false);
  return {
    isHover,
    hoverProps: {
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
    },
  };
};