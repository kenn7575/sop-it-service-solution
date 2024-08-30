'use client';

import { useEffect, useState } from 'react';

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
  setValue?: (value: any) => void;
  match?: defaultModel;
  options?: defaultModel[];
}

export function Combobox({
  editMode = true,
  label,
  setValue = () => {},
  match = { UUID: 1, name: '' },
  options = [{ UUID: 1, name: '' }],
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  if (!options) return null;

  return (
    <div className="question">
      <label htmlFor="trigger">
        {label}
        {editMode && <span className="required-tag">*</span>}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={!editMode} id="trigger">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-xl"
          >
            {match.name || `Vælg ${label}...`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[43.75rem] p-0 backdrop-blur-lg">
          <Command>
            <CommandInput placeholder={`Søg efter ${label}...`} />
            <CommandList>
              <CommandEmpty>Ingen data fundet.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.UUID}
                    value={option.name}
                    className="hover:bg-primary"
                    onSelect={(currentValue) => {
                      setValue(option.UUID);
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
