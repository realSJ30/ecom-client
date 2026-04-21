"use client";

import { useEffect, useState } from "react";

import MobileMenu from "@/components/mobile-menu";
import NavbarActions from "@/components/navbar-actions";
import MainNav from "@/components/ui/main-nav";
import { fetchStoreApiJson } from "@/lib/store-api";
import { Category } from "@/types";

interface NavbarCategoriesProps {
  className?: string;
}

const NavbarCategories: React.FC<NavbarCategoriesProps> = ({ className }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    let isActive = true;

    const loadCategories = async () => {
      try {
        const data = await fetchStoreApiJson<Category[]>("categories");

        if (isActive) {
          setCategories(data);
        }
      } catch (error) {
        console.error("Failed to load navbar categories:", error);
      }
    };

    loadCategories();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <>
      <MainNav data={categories} className={className} />
      <div className="ml-auto flex items-center gap-2">
        <NavbarActions />
        <MobileMenu categories={categories} />
      </div>
    </>
  );
};

export default NavbarCategories;
