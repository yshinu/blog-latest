'use client';
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Spacer } from '@nextui-org/spacer';
import { Select, SelectItem } from '@nextui-org/select';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { openaiAction } from '@/action/openaiAction';

export default function App() {
  const [value, setValue] = useState('**Hello world!!!**');
  const [summary, setSummary] = useState('');
  const animals = [
    { key: 'cat', label: 'Cat' },
    { key: 'dog', label: 'Dog' },
    { key: 'elephant', label: 'Elephant' },
    { key: 'lion', label: 'Lion' },
    { key: 'tiger', label: 'Tiger' },
    { key: 'giraffe', label: 'Giraffe' },
    { key: 'dolphin', label: 'Dolphin' },
    { key: 'penguin', label: 'Penguin' },
    { key: 'zebra', label: 'Zebra' },
    { key: 'shark', label: 'Shark' },
    { key: 'whale', label: 'Whale' },
    { key: 'otter', label: 'Otter' },
    { key: 'crocodile', label: 'Crocodile' },
  ];
  const [aiButtonDisabled, setAiButtonDisabled] = useState(false);
  return (
    <div className="w-full p-4 h-screen overflow-y-auto">
      <Card>
        <CardBody>
          <Input label="标题" className="w-full" placeholder="博客标题" />
        </CardBody>
      </Card>
      <Spacer y={2} />
      <Card>
        <CardHeader>
          <p className="text-small text-default-500">博客正文</p>
        </CardHeader>
        <CardBody>
          <MDEditor
            value={value}
            className="min-h-60"
            onChange={(e) => setValue(e!)}
          />
        </CardBody>
      </Card>
      <Spacer y={2} />
      <Card>
        <CardBody>
          <Textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            label="描述"
            description={
              <div>
                没有灵感？调用ai生成：{' '}
                <Button
                  onClick={async () => {
                    setSummary('调用OpenAI gpt-4o模型，正在生成中...');
                    try {
                      setAiButtonDisabled(true);
                      const aiSummary = await openaiAction(value);
                      setSummary(aiSummary);
                      setAiButtonDisabled(false);
                    } catch (error) {
                      console.error(error);
                      setSummary('OpenAI gpt-4o模型调用失败，请手动总结。');
                      setAiButtonDisabled(false);
                    }
                  }}
                  color="primary"
                  variant="bordered"
                  size="sm"
                  isLoading={aiButtonDisabled}
                >
                  生成
                </Button>
              </div>
            }
            placeholder="输入博客简介，用于SEO"
            className="w-full"
          />
        </CardBody>
      </Card>
      <Spacer y={2} />
      <Card>
        <CardBody>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <Input label="封面图" />
            <Select label="博文分类" placeholder="请选择博文分类">
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Select
              selectionMode="multiple"
              label="博文标签"
              placeholder="请选择博文标签"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>

            <Input
              label="其他标签"
              placeholder="请输入其他标签，用英文逗号分隔"
            />
            <div className=" col-span-2 flex justify-center items-center">
              <Spacer y={2} />

              <Button color="primary" className="w-full  sm:w-1/3">提交</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
