---
title: Bitwise operation on integers--basics of C
date: 2022-03-25 15:22:02
tags:
---

### Bit shifts << and >>

These operators simply shift the bits left or right. Starting with x=24 as shown above:

    the binary code of 24(int32) is
    00000000000000000000000000011000

    x << 2
    results in
    00000000000000000000000001100000
    (which is 96)

    x >> 2
    results in
    00000000000000000000000000000110
    (which is 6)

### Hex codes (anything beginning in 0x)

Hex code is a number system (hexadecimal) that is easier to convert to binary because it's base 16, so every character is exactly 4 bits. For example, "f" becomes "1111" in binary, so 0xffff is sixteen 1's, which in a 32bit int looks like:

    0000000000000000111111111111111111

### Bitwise AND &

This takes two numbers, goes through them bit by bit, and does an AND operation on them. For example, let's imagine x is our 24, which is:

    00000000000000000000000000011000

Now if we do x & 0xffff, in this case it will return the same value as x, because all of the 1 bits are within the 1 bits of 0xffff.
But let's do a bigger "number" (or really, a series of bits with some of the larger 1s enabled), like:

    00001111000011000000000000001111

Now, x & 0xffff does something interesting. Because the first 16 bits of 0xffff are 0s, the AND operation for those is now false, so now x & 0xffff results in:

    00000000000000000000000000001111

In practice in Unity you'll see this a lot in layer masks - there are 32 layers, each layer is one of these bits. So if you want to see if a given GameObject is on layer 5, you can do this:

```csharp
int someMask = 0xffff; //"just the first 16 layers"
int thisLayer = gameObject.layer;
int thisLayerAsABit = 1 << thisLayer; // shift the 1 over to the "thisLayer"th bit
if (thisLayerAsABit & someMask) {
```

### Bitwise OR |

This is basically the same as bitwise AND, except with an OR operation. You can use this to combine LayerMasks, but that's not very common. Where you're more likely to see this is in enums. In C# you can create enums with specified number values, and if these number values are powers of two, you can do a neat trick where you can | them together, and a single number can contain not just a reference to a single item on the enum, but any number of items on the enum. Here's a basic example:

```csharp
enum WeaponFlags {IsMelee = 1, IsRanged = 2, IsFire = 4, IsBullet = 8; IsBomb = 16 }

int isFireAndMelee = WeaponFlags.IsMelee | WeaponFlags.IsFire;
//isFireAndMelee bits: 00000000000000000000000000000101
```

#### Reference

https://forum.unity.com/threads/bitwise-operation-on-integers-what-does-x-16-and-x-0xffff-do-numerically.862753/
