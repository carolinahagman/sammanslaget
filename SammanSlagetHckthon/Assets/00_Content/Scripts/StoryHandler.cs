using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class StoryHandler : MonoBehaviour {

	//ref to in scene components
	[SerializeField] private TMP_Text textField;
	[SerializeField] private Image[] images;

	//ref to array where we get picture and text from index.
	[SerializeField] private StoryData[] storyDatas;

	//TODO: add bounds to currentIndex, have it be easily reset aswell.
	private int currentIndex;
	public int CurrentIndex { get { return currentIndex; } }

	//TOOD: Add so that dynamicall can add and remove story elements and spots for them based on list?

	void Start() {
		
	}

	public void OnStartStory() {

	}

	public void OnNextSlide() {

	}

	public void OnPreviousSlide() {

	}
}
