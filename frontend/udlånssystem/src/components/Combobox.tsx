'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

interface ComboboxProps {
  editMode?: boolean;
  label: string;
  showLabel?: boolean;
  setValue?: (value: any) => void;
  match?: defaultModel | undefined;
  options?: defaultModel[];
  popoverWidth?: string;
}

export function Combobox({
  editMode = true,
  label,
  showLabel = true,
  setValue = () => {},
  match = { UUID: 1, name: '' },
  options = [{ UUID: 1, name: '' }],
  popoverWidth = 'w-auto',
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  if (!options) return null;

  return (
    <div className="question">
      {showLabel && (
        <label htmlFor="trigger">
          {label}
          {editMode && <span className="required-tag">*</span>}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={!editMode} id="trigger">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-xl"
          >
            {match.name ? (
              <p>{match.name}</p>
            ) : (
              <p className="opacity-70">{label}</p>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={`w-[${popoverWidth}] p-0 backdrop-blur-lg`}>
          <Command>
            <CommandInput placeholder={`Søg efter ${label}...`} />
            <CommandList>
              <CommandEmpty>Ingen data fundet.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.UUID}
                    value={option.name}
                    onSelect={(currentValue) => {
                      setValue(option);
                      match.name = currentValue;

                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        match.name.trim() == option.name.trim()
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    />
                    {option.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
