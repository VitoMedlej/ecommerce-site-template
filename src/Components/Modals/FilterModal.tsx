"use client";
import React, { useEffect } from "react";
import { Dialog, DialogTitle, IconButton, DialogContent } from "@mui/material";
import { MdClose as CloseIcon } from "react-icons/md";
import { useFilterModalContext } from "@/app/Utils/Context/Contexts";
import FilterOptions from "../FilterOptions/FilterOptions";

const FilterModal = () => {
  const { isFilterModalOpen, setFilterModalOpen } = useFilterModalContext();

  useEffect(() => {
    // Close modal on escape key press
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFilterModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setFilterModalOpen]);

  return (
    <Dialog
      open={isFilterModalOpen}
      onClose={() => setFilterModalOpen(false)}
      fullScreen
      sx={{ zIndex: 9999 }}
    >
      <DialogTitle sx={{ position: "relative" }}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setFilterModalOpen(false)}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 10,
            right: 15,
            color: "red",
          }}
        >
          <CloseIcon />
        </IconButton>
        Filter
      </DialogTitle>
      <DialogContent>
        <FilterOptions />
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
